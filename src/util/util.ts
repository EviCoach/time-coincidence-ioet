import { Result } from "./types";

export default class Utility {
  static outputResult(result: Result): void {
    Object.keys(result).forEach(function (key) {
      console.log(`${key}:${result[key]}`);
    });
  }
}