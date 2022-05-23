export type Time = {
  hour: number;
  minute: number;
};

export type Duration = {
  start: Time;
  end: Time;
};

class TimeUtil {
  constructor() {}

  static getHours(duration: string): Duration {
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

  static findTimeOverlap(){}

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
