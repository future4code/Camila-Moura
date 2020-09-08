import { Request, Response, request } from "express";
import { BandDTO, Band } from "../model/Band";
import { BandBusiness } from "../business/BandBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { NotFoundError } from "../error/NotFoundError";

export class BandController {
  private static BandBusiness = new BandBusiness(
    new BandDatabase(),
    new IdGenerator(),
    new Authenticator()
  );

  public async registerBand(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;

      const authenticator = new Authenticator();
      const authenticationData = authenticator.getData(token);

      if (authenticationData.role === "normal") {
        throw new Error("Only a admin user can access this funcionality");
      }

      const userInput: BandDTO = {
        name: req.body.name,
        musicGenre: req.body.musicGenre,
        responsible: req.body.resposible,
      };

      const result = await BandController.BandBusiness.registerBand(userInput);
      res.status(200).send(result);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  }

  public async getBandByName(req: Request, res: Response) {
    try {
      const userInput: string = req.params.name;

      const result = await BandController.BandBusiness.getBandByName(userInput);

      if (!result) {
        throw new NotFoundError("User not found");
      }

      res.status(200).send(result);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  }
}
