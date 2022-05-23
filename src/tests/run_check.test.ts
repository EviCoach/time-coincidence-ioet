import { afterEach, describe, expect, it, vi } from "vitest";
import DayTime from "../time/day_time";
import { DayTimeMap } from "../util/types";

describe("DayTime.runcheck(...)", () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });
    it("should run and print names and number of coincidences", () => {
        const log = vi.fn(console.log);
        console.log = vi.fn();
        const store: DayTimeMap[] = [
          {
            MO: "10:00-12:00",
            TU: "10:00-12:00",
            TH: "01:00-03:00",
            SA: "14:00-18:00",
            SU: "20:00-21:00",
            name: "RENE",
          },
          {
            MO: "10:00-12:00",
            TU: "10:00-12:00",
            TH: "01:00-03:00",
            SA: "14:00-18:00",
            SU: "20:00-21:00",
            name: "JAMES",
          },
        ];
        DayTime.runCheck(store);
        expect(console.log["mock"].calls[0][0]).toBe("RENE-JAMES:5");
  });
});
