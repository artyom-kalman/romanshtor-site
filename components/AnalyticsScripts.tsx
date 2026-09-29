/* eslint-disable @next/next/no-img-element */

import { Suspense } from "react";
import { YM_ID } from "@/lib/analytics";
import MetricaPageViews from "./MetricaPageViews";

export default function AnalyticsScripts() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Suspense fallback={null}>
        <MetricaPageViews />
      </Suspense>
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${YM_ID}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
