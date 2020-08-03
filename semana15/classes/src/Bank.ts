import { UserAccount } from "./UserAccount";
import { JSONFileManager } from "./JSONFileManager";

export default class Bank {
  private accounts: UserAccount[];
  private fileManager: JSONFileManager;

  constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
    this.accounts = accounts;
    this.fileManager = fileManager;
  }

  public createAccount(userAccount: UserAccount): void {
    if (userAccount.getAge() >= 18) {
      try {
        const fileManager: JSONFileManager = new JSONFileManager(
          "accounts.json"
        );
        const accountsList: any = fileManager.readDatabase();

        accountsList.push(userAccount);

        fileManager.writeToDatabase(accountsList);
      } catch (error) {
        console.log(`Erro ao criar conta: ${error.message}`);
      }
    } else {
      console.log("É preciso ter mais de 18 anos para criar uma conta");
    }
  }

  public getAllAccounts(): UserAccount[] {
    const fileManager: JSONFileManager = new JSONFileManager("accounts.json");
    const accountsList: any = fileManager.readDatabase();

    const mappedAccounts: UserAccount[] = accountsList.map((account: any) => {
      return {
        name: account.getName(),
        cpf: account.getCpf(),
        age: account.getName(),
      };
    });

    console.log(mappedAccounts);
    return mappedAccounts;
  }

  public getAccountByCpfAndName(
    cpf: string,
    name: string
  ): UserAccount | undefined {
    const fileManager: JSONFileManager = new JSONFileManager("accounts.json");
    const accountsList: any = fileManager.readDatabase();

    const findUser: UserAccount = accountsList.find((account: any) => {
      if (account.name === name || account.cpf === cpf) {
        return {
          name: account.getName(),
          cpf: account.getCpf(),
          age: account.getName(),
        };
      }
    });
    console.log(findUser);
    return findUser;
  }
}
