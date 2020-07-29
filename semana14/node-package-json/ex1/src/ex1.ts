import * as fs from "fs";

/* a) Acessamos os parâmetros passados na linha de comando pelo process.argv */

const nameData: string = fs.readFileSync("./names.json").toString();

let names;

try {
  names = JSON.parse(nameData);
} catch (e) {
  names: [];
  console.log("Erro ao ler a base de dados " + e.message);
}

const age: number = Number(process.argv[2]);

names.map((name: any) => {
  console.log(`Olá, ${name.nome}! Você tem ${name.idade} anos.`); // b)
  console.log(`Em sete anos, você terá ${Number(name.idade) + 7}.`); // c)
});
