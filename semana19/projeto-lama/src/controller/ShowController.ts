import { Request, Response, request } from "express";
import { BandDTO, Band } from "../model/Band";
import { BandBusiness } from "../business/BandBusiness";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { NotFoundError } from "../error/NotFoundError";
import { ShowDatabase } from "../data/ShowDatabase";
import { Show } from "../model/Show";

export class ShowController {
  private static ShowBusiness = new ShowBusiness(
    new ShowDatabase(),
    new IdGenerator(),
    new Authenticator()
  );

  public async registerShow(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;

      const authenticator = new Authenticator();
      const authenticationData = authenticator.getData(token);

      if (authenticationData.role === "normal") {
        throw new Error("Only a admin user can access this funcionality");
      }

      const id = new IdGenerator();
      const showId: string = id.generate();

      const userInput = new Show(
        showId,
        req.body.weekDay,
        req.body.startTime,
        req.body.endTime,
        req.params.id
      );

      const result = await ShowController.ShowBusiness.registerShow(userInput);
      res.status(200).send(result);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  }

  public async getShowByDay(req: Request, res: Response) {
    try {
      const userInput: string = req.body.weekDay;

      const result = await ShowController.ShowBusiness.getShowByWeekDay(
        userInput
      );

      if (!result) {
        throw new NotFoundError("User not found");
      }

      res.status(200).send(result);
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  }
}
