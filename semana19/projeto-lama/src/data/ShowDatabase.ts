import { BaseDatabase } from "./BaseDatabase";
import { Show } from "../model/Show";

export class ShowDatabase extends BaseDatabase {
  private static TABLE_NAME = "LAMA_SHOWS";

  private toShowModel(dbModel?: any): Show | undefined {
    return (
      dbModel &&
      new Show(
        dbModel.id,
        dbModel.weekDay,
        dbModel.startTime,
        dbModel.endTime,
        dbModel.bandId
      )
    );
  }

  public async registerShow(show: Show): Promise<void> {
    await super.getConnection().raw(`
          INSERT INTO ${
            ShowDatabase.TABLE_NAME
          } (id, week_day, start_time, end_time, band_id)
          VALUES (
            '${show.getId()}', 
            '${show.getWeekDay()}', 
            '${show.getStartTime()}',
            '${show.getEndTime()}',
            '${show.getBandId()}', 
          )`);
  }

  public async getShowByWeekDay(day: string): Promise<Show[]> {
    const result = await this.getConnection()
      .select("*")
      .from(ShowDatabase.TABLE_NAME)
      .where({ week_day: day });

    return result[0];
  }
}
