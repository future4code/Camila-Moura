import * as fs from "fs";
import moment from "moment";
moment.locale("pt-br");

type Account = {
  name: string;
  cpf: number;
  date: moment.Moment;
  balance: number;
};

const archiveName: string = process.argv[2];
const newAccountName: string = process.argv[3];
const newAccountCPF: string = process.argv[4];
const newAccountDate: string = process.argv[5];
const newAccountBalance: string = process.argv[6];

const bufferArchive: Buffer = fs.readFileSync(archiveName);
const textArchive: string = bufferArchive.toString();
const accountsList: Account[] = textArchive ? JSON.parse(textArchive) : [];

function createAccount(
  newAccountName: string,
  newAccountCPF: string,
  newAccountDate: string,
  newAccountBalance: string
): void {
  const today = moment();
  const userBirthDate = moment(newAccountDate, "DD/MM/YYYY");

  const diffInYears = today.diff(userBirthDate, "years");

  if (diffInYears >= 18) {
    try {
      const numberCPF = Number(newAccountCPF);
      const numberDate = moment(newAccountDate, "DD/MM/YYYY");
      const numberBalance = Number(newAccountBalance);

      accountsList.push({
        name: newAccountName,
        cpf: numberCPF,
        date: numberDate,
        balance: numberBalance,
      });

      const updatedAccountsList = JSON.stringify(accountsList, null, 2);
      fs.writeFileSync("./data.json", updatedAccountsList);

      console.log("Conta criada com sucesso");
    } catch (error) {
      console.log(error.message);
    }
  } else {
    console.log("Apenas maiores de 18 anos podem criar conta");
  }
}

createAccount(newAccountName, newAccountCPF, newAccountDate, newAccountBalance);

export function getAllAccounts(): any {
  try {
    const fileData: string = fs.readFileSync("./data.json").toString();
    return JSON.parse(fileData);
  } catch (error) {
    console.log("Erro ao ler a base de dados: " + error.message);
    return [];
  }
}

getAllAccounts();
