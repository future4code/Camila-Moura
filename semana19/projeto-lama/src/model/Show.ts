import { BandDTO, Band } from "./Band";

export class Show {
  constructor(
    private id: string,
    private weekDay: string,
    private startTime: Number,
    private endTime: Number,
    private bandId: string
  ) {}

  getId() {
    return this.id;
  }

  getWeekDay() {
    return this.weekDay;
  }

  getStartTime() {
    return this.startTime;
  }

  getEndTime() {
    return this.endTime;
  }

  getBandId() {
    return this.bandId;
  }

  setId(id: string) {
    this.id = id;
  }

  setWeekDay(weekDay: string) {
    this.weekDay = weekDay;
  }

  setStartTime(startTime: Number) {
    this.startTime = startTime;
  }

  setEndTime(endTime: Number) {
    this.endTime = endTime;
  }

  setBandId(band: Band) {
    this.bandId = band.getId();
  }
}
