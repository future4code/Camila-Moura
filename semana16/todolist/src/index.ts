import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import moment from "moment";
import e from "express";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

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

/**************************************************************/

function generateId(): string {
  return Date.now() + Math.random().toString();
}

/* Criar usuário */

async function createUser(
  name: string,
  nickname: string,
  email: string
): Promise<void> {
  if (name || nickname || email !== "") {
    try {
      await connection
        .insert({
          id: generateId(),
          name,
          nickname,
          email,
        })
        .into("TodoListUser");
    } catch (error) {
      console.log(error);
    }
  } else {
    throw new Error("Todos os campos são obrigatórios");
  }
}

app.put("/user", async (req: Request, res: Response) => {
  try {
    await createUser(req.body.name, req.body.nickname, req.body.email);
    res.status(200).send({
      message: "Usuário criado com sucesso!",
    });
  } catch (e) {
    res.status(400).send({
      message: e.message,
    });
  }
});

/* Pegar todos os usuários */

async function getAllUsers(): Promise<any> {
  try {
    const result = await connection.raw(`
    SELECT id, name FROM TodoListUser;
  `);

    return result[0];
  } catch (error) {
    console.log(error);
  }
}

app.get("/user/all", async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();

    if (users[0] === undefined) {
      res.status(200).send([]);
    }

    res.status(200).send({
      users,
    });
  } catch (e) {
    res.status(400).send({
      message: e.message,
    });
  }
});

/* Pegar usuário pelo id */

async function getUserById(id: string): Promise<any> {
  const result = await connection.raw(`
    SELECT name, id FROM TodoListUser WHERE id = '${id}'
  `);

  return result[0];
}

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const user = await getUserById(req.params.id);

    if (user[0] === undefined) {
      res.status(400).send("não encontrado");
    }

    res.status(200).send({
      user,
    });
  } catch (e) {
    res.status(400).send({
      message: "id não encontrado",
    });
  }
});

/* Editar usuário */

async function updateUser(
  id: string,
  name: string,
  nickname: string
): Promise<void> {
  if (name || nickname !== "") {
    try {
      await connection("TodoListUser")
        .update({ name: name, nickname: nickname })
        .where("id", id);
    } catch (e) {
      console.log(e);
    }
  } else {
    throw new Error("Todos os campos são obrigatórios");
  }
}

app.post("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    await updateUser(req.params.id, req.body.name, req.body.nickname);
    res.status(200).send({
      message: "Usuário atualizado!",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

/* Criar tarefa */

async function createTask(
  title: string,
  description: string,
  limitDate: string,
  creatorUserId: string
): Promise<void> {
  if (title || description || limitDate || creatorUserId !== "") {
    const date = moment(limitDate, "YYYY-MM-DD").format("YYYY-MM-DD");
    try {
      await connection
        .insert({
          id: generateId(),
          title,
          description,
          status: "done",
          limit_date: date,
          creator_user_id: creatorUserId,
        })
        .into("TodoListTask");
    } catch (error) {
      console.log(error);
    }
  } else {
    throw new Error("Todos os campos são obrigatórios");
  }
}

app.put("/task", async (req: Request, res: Response) => {
  try {
    await createTask(
      req.body.title,
      req.body.description,
      req.body.limitDate,
      req.body.creatorUserId
    );
    res.status(200).send({
      message: "Tarefa criada com sucesso!",
    });
  } catch (e) {
    res.status(400).send({
      message: e.sql,
    });
  }
});

/* Pegar tarefa pelo id */

async function getTaskById(id: string): Promise<any> {
  const result = await connection.raw(`
    SELECT * FROM TodoListTask WHERE id = '${id}'
  `);

  console.log(result[0]);

  const taskList = result[0].map((item: any) => {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      status: item.status,
      limitDate: moment(item.limit_date, "YYYY-MM-DD").format("DD/MM/YYYY"),
      creatorUserId: item.creator_user_id,
    };
  });

  return taskList;
}

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const task = await getTaskById(req.params.id);

    if (task[0] === undefined) {
      res.status(400).send("não encontrado");
    }

    res.status(200).send({
      task,
    });
  } catch (e) {
    res.status(400).send({
      message: e.message,
    });
  }
});
