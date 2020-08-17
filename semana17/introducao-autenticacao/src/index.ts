import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

import UserDatabase from "./data/UserDatabase";
import { IdGenerator } from "./services/IdGenerator";
import { Authenticator } from "./services/authenticator";

/* Configuração inicial */

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/* 2. d. | 5. b. */

const myUser: UserDatabase = new UserDatabase();

myUser.createUser("777", "bananinha@labenu.com.br", "123568");
myUser.getUserByEmail("bananinha@labenu.com.br");

/* 4 */

app.post("/signup", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Email inválido");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Senha inválida");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const idGenerator = new IdGenerator();
    const id = idGenerator.execute();

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, userData.password);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id,
    });

    res.status(200).send({
      token,
    });
  } catch (e) {
    res.status(400).send({
      message: e.message,
    });
  }
});

/* 6. */

app.post("/login", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Email inválido");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const userDb = new UserDatabase();

    const user = await userDb.getUserByEmail(userData.email);

    if (user.password !== userData.password) {
      throw new Error("Senha inválida");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
    });

    res.status(200).send({
      token,
    });
  } catch (e) {
    res.status(400).send({
      message: e.message,
    });
  }
});

/* 8. */

app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticatorData = authenticator.getData(token);

    const userDb = new UserDatabase();
    const user = await userDb.getUserById(authenticatorData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (e) {
    res.status(400).send({
      message: e.message,
    });
  }
});
