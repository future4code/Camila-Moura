import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

import UserDatabase from "./data/UserDatabase";
import { IdGenerator } from "./services/IdGenerator";
import { Authenticator } from "./services/authenticator";
import HashManager from "./services/HashManager";
import BaseDatabase from "./data/BaseDatabase";

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

/* CADASTRO */

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
      role: req.body.role,
    };

    const idGenerator = new IdGenerator();
    const id = idGenerator.execute();

    const cypherPassword = await new HashManager().hash(userData.password);

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, cypherPassword, userData.role);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id,
      role: userData.role,
    });

    res.status(200).send({
      token,
    });
  } catch (e) {
    res.status(400).send({
      message: e.message,
    });
  }

  await BaseDatabase.destroyConnection();
});

/* LOGIN */

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

    const passwordIsCorrect = await new HashManager().compare(
      userData.password,
      user.password
    );

    if (!user || !passwordIsCorrect) {
      throw new Error("Usuário ou senha incorretos");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
      role: user.role,
    });

    res.status(200).send({
      token,
    });
  } catch (e) {
    res.status(400).send({
      message: e.message,
    });
  }
  await BaseDatabase.destroyConnection();
});

/* PEGAR PERFIL DO USUÁRIO */

app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticatorData = authenticator.getData(token);

    if (authenticatorData.role !== "NORMAL") {
      throw new Error("Apenas para usuários normais");
    }

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
  await BaseDatabase.destroyConnection();
});

/* DELETAR USUÁRIO */

app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticatorData = authenticator.getData(token);

    if (authenticatorData.role !== "ADMIN") {
      throw new Error("Apenas para usuários admin");
    }

    const id = req.params.id;

    const userDb = new UserDatabase();
    const user = await userDb.deleteUser(id);

    res.sendStatus(200);
  } catch (e) {
    res.status(400).send({
      message: e.message,
    });
  }
  await BaseDatabase.destroyConnection();
});

/* PEGAR USUÁRIO PELO ID */

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    authenticator.getData(token);

    const id = req.params.id;

    const userDb = new UserDatabase();
    const user = await userDb.getUserById(id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role,
    });
  } catch (e) {
    res.status(400).send({
      message: e.message,
    });
  }
  await BaseDatabase.destroyConnection();
});
