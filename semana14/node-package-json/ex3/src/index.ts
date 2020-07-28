import * as fs from "fs";

const nameData: string = fs.readFileSync("./names.json").toString();

try {
  const updatedTaskList: string = process.argv[2].toString();
  fs.appendFileSync("/src/tarefas.txt", updatedTaskList);
  console.log(updatedTaskList);
} catch (error) {
  console.log("Erro ao atualizar a base de dados");
  console.log(error);
}
