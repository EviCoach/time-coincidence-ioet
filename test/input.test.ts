import { expect, it } from "vitest";
import InputReader, { UserTime } from "../src/input/input_reader";

it('should convert line of string to object', () => {
   const line =
       "RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00";
    const userTime: UserTime = {
      RENE: {
        MO: "10:00-12:00",
        TU: "10:00-12:00",
        TH: "01:00-03:00",
        SA: "14:00-18:00",
        SU: "20:00-21:00"
      },
    };
    const result = InputReader.lineToObject(line);
    expect(result).toStrictEqual(userTime);
});