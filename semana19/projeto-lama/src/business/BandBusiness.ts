import { BandDTO, Band } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { InvalidParameterError } from "../error/InvalidParameterError";
import { NotFoundError } from "../error/NotFoundError";
import { DuplicateEntryError } from "../error/DuplicateEntryError";

export class BandBusiness {
  constructor(
    private bandDatabase: BandDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  async registerBand(band: BandDTO) {
    if (!band.name || !band.musicGenre || !band.responsible) {
      throw new InvalidParameterError("Missing input");
    }

    const findBand = await this.bandDatabase.getBandByName(band.name);

    if (findBand) {
      throw new DuplicateEntryError("Duplicate entry");
    }

    const id = this.idGenerator.generate();

    await this.bandDatabase.registerBand(
      new Band(id, band.name, band.musicGenre, band.responsible)
    );

    const accessToken = this.authenticator.generateToken({
      id,
    });

    return accessToken;
  }
}
