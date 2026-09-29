"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { YM_ID } from "@/lib/analytics";

declare global {
  interface Window {
    ym?: (
      id: number,
      method: "hit",
      url: string,
      options: { referer: string; title: string },
    ) => void;
  }
}

export default function MetricaPageViews() {
  const pathname = usePathname();
  const search = useSearchParams().toString();
  const lastUrl = useRef<string | null>(null);

  const trackPageView = useCallback(() => {
    // The bootstrap queues calls while the external library is still loading.
    if (!window.ym) return;
    const url = new URL(window.location.href);
    url.hash = "";
    if (lastUrl.current === url.href) return;
    window.ym(YM_ID, "hit", url.href, {
      referer: lastUrl.current ?? document.referrer,
      title: document.title,
    });
    lastUrl.current = url.href;
  }, []);

  useEffect(() => {
    trackPageView();
  }, [pathname, search, trackPageView]);

  return (
    <Script id="yandex-metrica" strategy="afterInteractive" onReady={trackPageView}>
      {`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YM_ID}', 'ym');
        ym(${YM_ID}, 'init', {defer:true, ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer:document.referrer, url:location.href, accurateTrackBounce:true, trackLinks:true});
      `}
    </Script>
  );
}
