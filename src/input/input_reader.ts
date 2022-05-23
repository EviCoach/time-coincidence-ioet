import fs from "fs";
import readline from "readline";

class InputReader {
  static async readFile(path: string): Promise<Array<string>> {
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
}

export default InputReader;
