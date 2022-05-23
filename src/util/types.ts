export type DayTimeMap = {
  [prop:string]: string;
  // TU: string;
  // WD?: string;
  // TH?: string;
  // FR?: string;
  // SA?: string;
  // SU?: string;
  name: string;
};

export type Time = {
  hour: number;
  minute: number;
};

export type Duration = {
  start: Time;
  end: Time;
};

export type Result = { [prop: string]: number };
