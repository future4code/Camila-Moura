import { Show } from "../model/Show";
import { ShowDatabase } from "../data/ShowDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { InvalidParameterError } from "../error/InvalidParameterError";

export class ShowBusiness {
  constructor(
    private showDatabase: ShowDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  async registerShow(show: Show) {
    if (
      !show.getWeekDay() ||
      !show.getStartTime() ||
      !show.getEndTime() ||
      !show.getBandId()
    ) {
      throw new InvalidParameterError("Missing input");
    }

    if (show.getStartTime() > show.getEndTime()) {
      throw new Error("The beginning of the show can't be before the ending");
    }

    const id = this.idGenerator.generate();

    await this.showDatabase.registerShow(
      new Show(
        id,
        show.getWeekDay(),
        show.getStartTime(),
        show.getEndTime(),
        show.getBandId()
      )
    );
  }

  async getShowByWeekDay(weekDay: string) {
    if (!weekDay) {
      throw new InvalidParameterError("Missing input");
    }

    const findShows: Show[] = await this.getShowByWeekDay(weekDay);

    return findShows;
  }
}
