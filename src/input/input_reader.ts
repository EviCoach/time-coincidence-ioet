import fs from "fs";
import readline from "readline";
import TimeUtil from "../time/time_util";

export type DayTimeMap = {
  [prop: string]: string;
};
export type UserTime = {
  [prop: string]:{
        [prop: string]: string;
      };
};

export type Result = { [prop: string]: number; } 

class InputReader {
  constructor() {}

  static async readFiles(path:string): Promise<Array<string>> {
    let result: string[] = [];
    const fileStream = fs.createReadStream(path);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    for await (const line of rl) {
      if (line.length > 0) result.push(line);
    }
    return result;
  }

  static saveObject(lines: string[]): UserTime {
    let store = {};
    for (let i = 0; i < lines.length; i++) {
      let currentLine = lines[i];
      store = {
        ...store,
        ...this.lineToObject(currentLine),
      };
    }
    return store;
  }

  static saveObjectArr(lines: string[]): DayTimeMap[] {
    let store: DayTimeMap[] = [];
    for (let i = 0; i < lines.length; i++) {
      let currentLine = lines[i];
      store.push(this.lineToObject(currentLine));
    }
    return store;
  }

  static runCheck(store: DayTimeMap[]): void {
    for (let i = 0; i < store.length; i++) {
      let currentUserTime = store[i];
      for (let j = i + 1; j < store.length; j++){
        let otherUserTime = store[j];
        this.checkTimes(currentUserTime, otherUserTime);
      }
    }
  }

  // static checkTimes(time1: DayTimeMap, time2: DayTimeMap):Result {
  static checkTimes(time1: DayTimeMap, time2: DayTimeMap):void {
    let output: Result = {};
    let time1Days = Object.keys(time1);
    let currentName = `${time1.name}-${time2.name}`;
    output[currentName] = 0
    for (let d = 0; d < time1Days.length; d++){ // fixed length loop
      let currentDay = time1Days[d];
      if (currentDay == "name" || !time2[currentDay]) continue;
      let duration1 = TimeUtil.getHours(time1[currentDay]);
      let duration2 = TimeUtil.getHours(time2[currentDay]);
      let overlapped = TimeUtil.checkCoincidence(duration1, duration2);
      if (overlapped) {
        output[currentName]++;
      }
    }
    // return output;
    this.outputResult(output);
  }

  static outputResult(result: Result):void {
    Object.keys(result).forEach(function (key) {
      console.log(`${key}:${result[key]}`);
    });
  }

  static lineToObject(line: string): DayTimeMap {
    // const store: UserTime = {};
    const dayTimeStore: DayTimeMap = {};
    if (line.length > 0) {
      const [name, daysAndTimes] = line.split("=");
      daysAndTimes.split(",").forEach(function (dayAndTime) {
        const [day, time, ...rest] = dayAndTime
          .replace(/([a-z]+)/i, "$1 ")
          .split(" ");
        dayTimeStore[day] = time + rest || rest.join("").trim();
      });
      // store[name] = dayTimeStore;
      dayTimeStore["name"] = name;
    }
    return dayTimeStore;
  }
}

export default InputReader;
