import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {
  private static TABLE_NAME = "LAMA_BANDAS";

  private toBandModel(dbModel?: any): Band | undefined {
    return (
      dbModel &&
      new Band(
        dbModel.id,
        dbModel.name,
        dbModel.musicGenre,
        dbModel.responsbile
      )
    );
  }

  public async registerBand(band: Band): Promise<void> {
    await super.getConnection().raw(`
          INSERT INTO ${
            BandDatabase.TABLE_NAME
          } (id, name, music_genre, responsible)
          VALUES (
            '${band.getId()}', 
            '${band.getName()}', 
            '${band.getMusicGenre()}',
            '${band.getResponsible()}', 
          )`);
  }

  public async getBandByName(name: string): Promise<Band> {
    const result = await this.getConnection()
      .select("*")
      .from(BandDatabase.TABLE_NAME)
      .where({ name });

    return Band.toBandModel(result[0]);
  }
}
