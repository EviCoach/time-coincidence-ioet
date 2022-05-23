import TimeUtil from "./time_util";
import { DayTimeMap } from "../util/types";

class DayTime {
  static runCheck(store: DayTimeMap[]): void {
    for (let i = 0; i < store.length; i++) {
      let currentUserTime = store[i];
      for (let j = i + 1; j < store.length; j++) {
        let otherUserTime = store[j];
        TimeUtil.checkTimes(currentUserTime, otherUserTime);
      }
    }
  }

  static parseLines(line: string): DayTimeMap {
    const dayTimeStore: DayTimeMap = {name: ""};
    if (line.length > 0) {
      const [name, daysAndTimes] = line.split("=");
      daysAndTimes.split(",").forEach(function (dayAndTime) {
        const [day, time, ...rest] = dayAndTime
          .replace(/([a-z]+)/i, "$1 ")
          .split(" ");
        dayTimeStore[day] = time + rest || rest.join("").trim();
      });
      dayTimeStore["name"] = name;
    }
    return dayTimeStore;
  }

  static accumulateDayTimeMaps(lines: string[]): DayTimeMap[] {
    let store: DayTimeMap[] = [];
    for (let i = 0; i < lines.length; i++) {
      let currentLine = lines[i];
      store.push(DayTime.parseLines(currentLine));
    }
    return store;
  }
}
export default DayTime;