import { describe, expect, it } from "vitest";
import TimeUtil from "../time/time_util";
import { Duration } from "../util/types";


describe("TimeUtil.parseDuration(...)", () => {
  it("should convert string duration to duration object", () => {
    const duration = "10:00-12:00";
    const expectedResult = {
      start: {
        hour: 10,
        minute: 0,
      },
      end: {
        hour: 12,
        minute: 0,
      },
    };
    const result = TimeUtil.parseDuration(duration);
    expect(result).toStrictEqual(expectedResult);
})
});

describe("TimeUtil.checkCoincidence(...)", () => {
  it("should check two given times for coincidence", () => {
    const duration1: Duration = {
      start: {
        hour: 0,
        minute: 11,
      },
      end: {
        hour: 14,
        minute: 0,
      },
    };

    const duration2: Duration = {
      start: {
        hour: 0,
        minute: 0,
      },
      end: {
        hour: 15,
        minute: 12,
      },
    };

    const result = TimeUtil.checkCoincidence(duration1, duration2);
    expect(result).toBe(true);
  });
});
