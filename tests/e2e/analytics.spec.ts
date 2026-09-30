import { expect, test, type Page } from "@playwright/test";

function captureMetricaRequests(page: Page) {
  const requests: string[] = [];
  page.on("request", (request) => {
    const url = new URL(request.url());
    if (/^mc\.yandex\./.test(url.hostname)) requests.push(request.url());
  });
  return requests;
}

async function expectMetricaDisabled(page: Page, requests: string[]) {
  await page.waitForLoadState("load");
  await expect(page.locator("#yandex-metrica")).toHaveCount(0);
  await expect(page.locator('img[src*="mc.yandex."]')).toHaveCount(0);
  expect(await page.evaluate(() => typeof window.ym)).toBe("undefined");
  expect((await page.context().cookies()).filter((cookie) => cookie.name.startsWith("_ym_"))).toEqual([]);
  expect(requests).toEqual([]);
}

test.beforeEach(async ({ page }) => {
  // Count attempted tracking requests even when blocked, and keep tests offline.
  await page.route("**/*", (route) => {
    if (new URL(route.request().url()).hostname === "127.0.0.1") return route.continue();
    return route.abort();
  });
});

for (const path of ["/", "/contacts/", "/privacy/"]) {
  test(`Metrica stays disabled on direct load of ${path}`, async ({ page }) => {
    const requests = captureMetricaRequests(page);
    await page.goto(path);
    await expectMetricaDisabled(page, requests);
  });
}

test("navigation and contact links work without enabling Metrica", async ({ page }) => {
  const requests = captureMetricaRequests(page);
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await page.getByRole("link", { name: "Контакты и схема проезда" }).click();
  await expect(page.getByRole("heading", { name: "Как с нами связаться" })).toBeVisible();
  for (const prefix of ["tel:", "mailto:", "https://wa.me/", "https://t.me/", "https://max.ru/"]) {
    await expect(page.locator(`main a[href^="${prefix}"]`).first()).toBeVisible();
  }
  await page.evaluate(() => window.history.pushState(null, "", "?source=review"));
  await expectMetricaDisabled(page, requests);
  await page.getByRole("link", { name: "Политика конфиденциальности" }).click();
  await expect(page.getByText("Счётчик Яндекс Метрики на сайте отключён.", { exact: false })).toBeVisible();
  await expectMetricaDisabled(page, requests);
  await page.goBack();
  await expect(page).toHaveURL(/\/contacts\/\?source=review$/);
  await page.goForward();
  await expect(page).toHaveURL(/\/privacy\/$/);
  await page.getByRole("link", { name: "Услуги", exact: true }).first().click();
  await expect(page).toHaveURL(/\/#services$/);
  await expectMetricaDisabled(page, requests);
  expect(errors).toEqual([]);
});

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  for (const path of ["/", "/contacts/", "/privacy/"]) {
    test(`no Metrica tracking pixel on ${path}`, async ({ page }) => {
      const requests = captureMetricaRequests(page);
      await page.goto(path);
      await expect(page.locator('img[src*="mc.yandex."]')).toHaveCount(0);
      expect(requests).toEqual([]);
    });
  }
});
