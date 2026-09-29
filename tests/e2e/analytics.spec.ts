import { expect, test, type Page } from "@playwright/test";

type MetricaCall = [number, string, string | Record<string, unknown>, Record<string, unknown>?];
type TestWindow = Window & { __metricaCalls?: MetricaCall[] };

// Exercise the real bootstrap and route hooks without sending visits to Yandex.
const metricaStub = `
  window.__metricaCalls = [];
  const queued = window.ym.a || [];
  window.ym = (...args) => {
    window.__metricaCalls.push(args);
    if (args[1] === 'init' && !args[2].defer) {
      window.__metricaCalls.push([args[0], 'hit', args[2].url || location.href]);
    }
  };
  queued.forEach(args => window.ym(...args));
`;

async function pageviews(page: Page) {
  return page.evaluate(() => ((window as TestWindow).__metricaCalls ?? [])
    .filter((call) => call[1] === "hit"));
}

test.beforeEach(async ({ page }) => {
  await page.route("**/*", (route) => {
    const url = new URL(route.request().url());
    if (url.hostname === "127.0.0.1") return route.continue();
    if (url.hostname === "mc.yandex.ru" && url.pathname === "/metrika/tag.js") {
      return route.fulfill({ contentType: "application/javascript", body: metricaStub });
    }
    return route.abort();
  });
});

for (const path of ["/", "/contacts/", "/privacy/"]) {
  test(`one pageview on direct load of ${path}`, async ({ page, baseURL }) => {
    await page.goto(path);
    await expect.poll(() => pageviews(page)).toHaveLength(1);
    expect((await pageviews(page))[0].slice(0, 3)).toEqual([109390723, "hit", `${baseURL}${path}`]);
  });
}

test("tracks internal navigation and back/forward once, but not section anchors", async ({ page, baseURL }) => {
  await page.goto("/");
  await expect.poll(() => pageviews(page)).toHaveLength(1);
  await page.getByRole("link", { name: "Контакты и схема проезда" }).click();
  await expect(page).toHaveURL(/\/contacts\/$/);
  await expect.poll(() => pageviews(page)).toHaveLength(2);
  expect((await pageviews(page))[1][3]?.referer).toBe(`${baseURL}/`);
  expect((await pageviews(page))[1][3]?.title).toContain("Контакты");
  await page.getByRole("link", { name: "Политика конфиденциальности" }).click();
  await expect(page).toHaveURL(/\/privacy\/$/);
  await expect.poll(() => pageviews(page)).toHaveLength(3);
  await page.goBack();
  await expect.poll(() => pageviews(page)).toHaveLength(4);
  await page.goForward();
  await expect.poll(() => pageviews(page)).toHaveLength(5);
  await page.getByRole("link", { name: "Портфолио", exact: true }).first().click();
  await expect(page).toHaveURL(/\/#/);
  await expect.poll(() => pageviews(page)).toHaveLength(6);
  await page.getByRole("link", { name: "Услуги", exact: true }).first().click();
  await expect(page).toHaveURL(/\/#services$/);
  await page.evaluate(() => new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  }));
  expect(await pageviews(page)).toHaveLength(6);
});

test("preserves pageviews while the tracking library loads slowly", async ({ page, baseURL }) => {
  let release!: () => void;
  const ready = new Promise<void>((resolve) => { release = resolve; });
  await page.route("https://mc.yandex.ru/metrika/tag.js**", async (route) => {
    await ready;
    await route.fulfill({ contentType: "application/javascript", body: metricaStub });
  });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.getByRole("link", { name: "Контакты и схема проезда" }).click();
  await expect(page).toHaveURL(/\/contacts\/$/);
  release();
  await expect.poll(() => pageviews(page)).toHaveLength(2);
  expect((await pageviews(page)).map((call) => call[2])).toEqual([`${baseURL}/`, `${baseURL}/contacts/`]);
});

test("contact links retain formats supported by existing Metrica goals", async ({ page }) => {
  await page.goto("/contacts/");
  for (const prefix of ["tel:", "mailto:", "https://wa.me/", "https://t.me/", "https://max.ru/"]) {
    await expect(page.locator(`main a[href^="${prefix}"]`).first()).toBeVisible();
  }
});

test("tracks query changes once", async ({ page, baseURL }) => {
  await page.goto("/contacts/");
  await expect.poll(() => pageviews(page)).toHaveLength(1);
  await page.evaluate(() => window.history.pushState(null, "", "?source=review"));
  await expect.poll(() => pageviews(page)).toHaveLength(2);
  expect((await pageviews(page))[1][2]).toBe(`${baseURL}/contacts/?source=review`);
});

test("navigation works when a tracking blocker rejects Metrica", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.route("https://mc.yandex.ru/**", (route) => route.abort());
  await page.goto("/");
  await page.getByRole("link", { name: "Контакты и схема проезда" }).click();
  await expect(page.getByRole("heading", { name: "Как с нами связаться" })).toBeVisible();
  expect(errors).toEqual([]);
});
