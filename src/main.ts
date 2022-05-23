import path, { dirname } from "path";
import InputReader from "./input/input_reader";
import DayTime from "./time/day_time";
import { DayTimeMap } from "./util/types";

async function main() {
  let lines: string[] = await InputReader.readFile(
    path.resolve("examples/test.txt")
  );
  let userTimes: DayTimeMap[] = DayTime.accumulateDayTimeMaps(lines);
  DayTime.runCheck(userTimes);
}
main();
