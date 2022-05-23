import fs from "fs";
import readline from "readline";

export type DayTimeMap = {
  [prop: string]: string;
};
export type UserTime = {
  [prop: string]: {
    [prop: string]: string;
  };
};

class InputReader {
  constructor() {}

  static async readFiles(): Promise<Array<string>> {
    let result: string[] = [];
    const fileStream = fs.createReadStream("../examples/test.txt");
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    for await (const line of rl) {
      if (line.length > 0) result.push(line);
    }
    return result;
  }

  static saveObject(lines: string[]): any {
    let store = {};
    for (let i = 0; i < lines.length; i++){
      let currentLine = lines[i];
      store = {
        ...store,
        ...this.lineToObject(currentLine)
      }
    }
    return store;
  }

  static lineToObject(line: string): UserTime {
    const store: UserTime = {};
    if (line.length > 0) {
      const dayTimeStore: DayTimeMap = {};
      const [name, daysAndTimes] = line.split("=");
      daysAndTimes.split(",").forEach(function (dayAndTime) {
        const [day, time, ...rest] = dayAndTime
          .replace(/([a-z]+)/i, "$1 ")
          .split(" ");
        dayTimeStore[day] = time + rest || rest.join("").trim();
      });
      store[name] = dayTimeStore;
    }
    return store;
  }
}

export default InputReader;
