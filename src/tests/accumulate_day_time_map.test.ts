import { describe, expect, it } from "vitest";
import DayTime from "../time/day_time";

describe("accumulateDayTimeMap()", () => {
  it("should return an array of dayTimeMaps", () => {
    const lines: string[] = [
      "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00",
      "ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00",
    ];
      const expectedResult = [
        {
          MO: "10:00-12:00",
          TH: "12:00-14:00",
          SU: "20:00-21:00",
          name: "ASTRID",
        },
        {
          MO: "10:00-12:00",
          TH: "12:00-14:00",
          SU: "20:00-21:00",
          name: "ANDRES",
        },
      ];
      const result = DayTime.accumulateDayTimeMaps(lines);
      expect(result).toStrictEqual(expectedResult);
  });
});
