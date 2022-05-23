import { expect, it } from "vitest";
import TimeUtil, { Duration } from "../src/time/time_util";

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
