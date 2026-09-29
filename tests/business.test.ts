import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  salonExperienceDescription,
  yearsCountLabel,
  yearsInBusiness,
  yearsWord,
} from "../lib/business.ts";

describe("salon founding anniversary in Khabarovsk", () => {
  for (const [date, expected] of [
    ["2003-07-07T00:00:00+10:00", 0],
    ["2026-07-06T23:59:59+10:00", 22],
    ["2026-07-07T00:00:00+10:00", 23],
    ["2026-07-08T00:00:00+10:00", 23],
    ["2027-01-01T00:00:00+10:00", 23],
  ] as const) {
    it(`reports ${expected} completed years at ${date}`, () => {
      assert.equal(yearsInBusiness(new Date(date)), expected);
    });
  }

  it("uses the same anniversary in displayed and SEO copy", () => {
    const date = new Date("2026-07-07T00:00:00+10:00");
    assert.equal(yearsCountLabel(date), "23 года");
    assert.match(salonExperienceDescription(date), /23-летним опытом/);
  });
});

describe("Russian year endings", () => {
  for (const [count, expected] of [
    [0, "лет"], [1, "год"], [2, "года"], [4, "года"], [5, "лет"],
    [11, "лет"], [12, "лет"], [14, "лет"], [20, "лет"],
    [21, "год"], [22, "года"], [25, "лет"], [111, "лет"],
  ] as const) {
    it(`uses ${expected} for ${count}`, () => {
      assert.equal(yearsWord(count), expected);
    });
  }
});
