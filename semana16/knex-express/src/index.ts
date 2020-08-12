import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";
dotenv.config();

// Config knex, dotenv e express

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();

app.use(express.json());
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.log(`Failure upon starting server`);
  }
});

// Exercício 1

/* a.  Quando usamos raw, ele nos devolve o resultado da query e outras informações junto
dentro de um array. Para mostrarmos só o resultado, basta pegar a primeira posição do array.
*/

/* b. */

const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
      `);

  return result[0];
};

//getActorByName("Tony Ramos");

/* c. */

const getActorsByGender = async (gender: string): Promise<any> => {
  if (gender === "female") {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = 'female'
        `);

    return result[0];
  } else if (gender === "male") {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = 'male'
    `);
    return result[0];
  }
};

//getActorsByGender("male");
//getActorsByGender("female");

/* 2. */

/* a. */

const updateActorSalary = async (id: string, salary: number): Promise<void> => {
  await connection("Actor").update({ salary: salary }).where("id", id);
};

//updateActorSalary("001", 50000);
/* b. */

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor").delete("*").where("id", id);
};

// deleteActor("002");

const avarageSalaryByGender = async (gender: string): Promise<void> => {
  const result = await connection("Actor")
    .avg("salary as avarage")
    .where({ gender });
  return result[0].avarage;
};

// avarageSalaryByGender("male")
// avarageSalaryByGender("female")

/* 3.  */

/* a. Porque ele esta trazendo a requisição do parâmetro da URL. */

/* b. As últimas linhas do try catch respondem a requisição. No caso do try,
caso dê certo, ele envia o dado e manda status de 200. No catch, caso dê erro,
ele manda a mensagem de erro e status 400. */

/* c. */

app.get("/actor/", async (req: Request, res: Response) => {
  try {
    const count = await getActorsByGender(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

/* 4. */

/* a. */

app.post("/actor", async (req: Request, res: Response) => {
  try {
    await updateActorSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success",
    });
  } catch (e) {
    res.status(400).send({
      message: e.message,
    });
  }
});

/* b. */

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
    res.status(200).send({
      message: "Deleted",
    });
  } catch (e) {
    res.status(400).send({
      message: e.message,
    });
  }
});

/* 5. */

const newMovie = async (
  id: string,
  name: string,
  summary: string,
  release_date: Date,
  playing_limit_date: Date
) => {
  await connection
    .insert({
      id: id,
      name: name,
      summary: summary,
      release_date: release_date,
      playing_limit_date: playing_limit_date,
    })
    .into("Movies");
};

app.post("/movies", async (req: Request, res: Response) => {
  try {
    await newMovie(
      req.body.id,
      req.body.name,
      req.body.summary,
      req.body.release_date,
      req.body.playing_limit_date
    );
    res.status(200).send({
      message: "Success",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

/* 6. */

const getAllMovies = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movies LIMIT 15
  `);
  return result[0];
};

app.get("/movies/all", async (req: Request, res: Response) => {
  try {
    const allMovies = await getAllMovies();
    res.status(200).send({
      moviesList: allMovies,
    });
  } catch (e) {
    res.status(400).send({
      message: e.message,
    });
  }
});

/* 7. */

const searchMovie = async (query: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT * FROM Movies WHERE name LIKE '%${query}%' OR summary LIKE '%${query}%'
        `);

  return result[0];
};

app.get("/movies/search", async (req: Request, res: Response) => {
  try {
    const moviesList = await searchMovie(req.query.query as string);
    res.status(200).send({
      movies: moviesList,
    });
  } catch (error) {
    message: error.message;
  }
});
