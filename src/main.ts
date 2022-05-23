import path, { dirname } from "path";
import InputReader, { DayTimeMap } from "./input/input_reader";

async function main() {
    let lines: string[] = await InputReader.readFiles(
      path.resolve("examples/test3.txt")
    );
    let userTimes: DayTimeMap[] = InputReader.saveObjectArr(lines);
    InputReader.runCheck(userTimes);
}
main();
