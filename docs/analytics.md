# Analytics verification

Counter: **109390723**. The shared layout includes Metrica on the homepage, contacts page, and privacy page. Development mode does not load it.

## Confirmed baseline

On September 28, 2026, public HTTP checks found the counter on all three production pages and a successful response from the tracking script. Artyom's screenshots showed the active counter, Webvisor recording, and reported visits and conversions.

For August 29–September 28, 2026:

| Metric | Value |
| --- | --- |
| Pageviews | 173 |
| Visits | 139 |
| Visitors | 129 |
| Time on site | 31 seconds |
| Pages per visit | 1.24 |
| Bounce rate | 40.29% |
| Direct / search / referral visits | 74 / 55 / 10 |
| Phone goal `562317956` | 1 completion in 1 visit, 0.72% conversion |
| Email goal `562317957` | No data |
| Messenger goal `562317958` | 4 completions in 3 visits, 2.16% conversion |

These goals count clicks, not completed calls, conversations, or sales. No email data does not establish a tracking failure. The 51.23% decrease in visits versus the previous period has not been investigated.

## Existing contact goals

The site's `tel:` and `mailto:` anchors support the existing phone/email goals. WhatsApp uses `wa.me`, Telegram uses `t.me`, and MAX uses `max.ru`; all three are listed in [Yandex's supported messenger URLs](https://yandex.ru/support/metrica/ru/simple-goal/messengers).

Keep these Metrica-configured goals. Do not add duplicate `reachGoal` calls solely because the repository does not contain custom events. The screenshots confirm aggregate phone/messenger conversions, not the behavior of every individual link.

## Pageviews

Next.js changes routes without reloading the document. [Yandex's SPA instructions](https://yandex.ru/support/metrica/ru/code/counter-spa-setup) require explicit `hit` calls and recommend `defer: true` to avoid an automatic initial pageview being counted twice. The `ssr` initialization option does not replace route tracking.

Browser regression tests use a fake Metrica library to verify the site's calls without sending real traffic to Yandex. They do not prove that Yandex has accepted events or that account-level goal/filter settings are correct.

The maintenance change uses a client route observer inside the shared layout. It initializes Metrica with `defer: true` and queues one explicit pageview per pathname/query change, including the first page. Hash-only section jumps do not add pageviews. The bootstrap stays deferred until hydration, and repeated effect execution is deduplicated by URL.

## Live verification after deployment

1. Open `https://rimskiestory.ru/?_ym_debug=2` with tracking blockers disabled for the check. Confirm counter 109390723 in the Counters tab.
2. In the Console tab, confirm one PageView for the initial load. Navigate through the footer to contacts and privacy, then use back/forward. Each route transition should produce one PageView with the preceding page as referrer. In-page section links should not produce extra pageviews.
3. Load `/contacts/?_ym_debug=2` and `/privacy/?_ym_debug=2` directly and confirm one PageView each.
4. Click a phone and email link, cancelling the operating system's app prompt if desired. Confirm goal IDs 562317956 and 562317957 in the Events tab.
5. Click WhatsApp, Telegram, and MAX individually. Confirm goal 562317958 for each. Opening a link is sufficient; do not send a message or place a call.
6. Check the Metrica reports after processing. Account filters, including exclusion of your own visits, may keep debug events out of reports.
7. Record the date, route/link, expected event, observed event, and any filter that affected the result in the maintenance issue.

[Yandex's counter verification instructions](https://yandex.com/support/metrica/en/general/check-counter)

The remaining live checks require browser/dashboard access. Never mark them complete from the stubbed test results alone.
