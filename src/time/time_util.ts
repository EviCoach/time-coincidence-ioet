import { DayTimeMap, Duration, Result } from "../util/types";
import Utility from "../util/util";

class TimeUtil {
  static parseDuration(duration: string): Duration {
    const [startTime, endTime] = duration.split("-");
    let [startHour, startMinute] = startTime.split(":");
    let [endHour, endMinute] = endTime.split(":");
    return {
      start: {
        hour: parseInt(startHour),
        minute: parseInt(startMinute),
      },
      end: {
        hour: parseInt(endHour),
        minute: parseInt(endMinute),
      },
    };
  }

  static checkTimes(time1: DayTimeMap, time2: DayTimeMap): void {
    let output: Result = {};
    let time1Days = Object.keys(time1);
    let currentName = `${time1.name}-${time2.name}`;
    output[currentName] = 0;
    // console.log("Time1Days.length::::::::" + time1Days.length);

    for (let d = 0; d < time1Days.length; d++) {
      // fixed length loop
      let currentDay = time1Days[d];
      if (currentDay == "name" || !time2[currentDay]) continue;
      let duration1 = TimeUtil.parseDuration(time1[currentDay]);
      let duration2 = TimeUtil.parseDuration(time2[currentDay]);

      let overlapped = TimeUtil.checkCoincidence(duration1, duration2);
      // console.log(
      //   `Checking duration1 ${JSON.stringify(duration1)} and ${JSON.stringify(
      //     duration2
      //   )} for day ${currentDay} and overlapped(${overlapped})`
      // );
      if (overlapped) {
        output[currentName]++;
      }
    }
    // return output;
    Utility.outputResult(output);
  }

  static checkCoincidence(hours1: Duration, hours2: Duration): boolean {
    if (
      hours1.start.hour > hours1.end.hour ||
      hours2.start.hour > hours2.end.hour
    )
      throw new Error("Invalid duration");
    if (
      hours1.start.hour < hours2.start.hour &&
      hours1.end.hour > hours2.end.hour
    )
      return true;
    if (
      hours2.start.hour < hours1.start.hour &&
      hours2.end.hour > hours1.end.hour
    )
      return true;
    if (
      hours1.start.hour === hours2.start.hour &&
      hours1.end.hour === hours2.end.hour &&
      hours1.start.minute === 0 &&
      hours2.end.minute === 0
    )
      return true;
    if (
      hours1.start.hour === hours2.start.hour &&
      hours1.end.hour === hours2.end.hour
    )
      return true;
    if (hours1.start.hour === hours2.start.hour) return true;
    if (
      hours2.start.hour === hours1.end.hour &&
      hours1.end.minute === 0 &&
      hours2.end.minute === 0
    )
      return false;
    if (
      hours2.start.hour === hours1.end.hour &&
      hours1.end.minute !== 0 &&
      hours2.start.minute !== 0
    ) {
      // check if hours2 start minute is ahead of hours1 end minute
      if (hours2.start.minute >= hours1.end.minute) {
        return false;
      } else return true;
    }
    return false;
  }
}

export default TimeUtil;
