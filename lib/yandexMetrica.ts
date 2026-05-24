import { YM_ID } from "@/components/AnalyticsScripts";

declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
  }
}

export function reachGoal(
  target: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined" || typeof window.ym !== "function") {
    return;
  }
  window.ym(YM_ID, "reachGoal", target, params);
}
