/* 1.  O constructor é uma função, e ele recebe como parâmetros
os atributos da classe que está inserido. Para chamá-lo, chamamos
a classe e usamos a keyword New */

/* 2. A mensagem foi impressa 1 vez. Segue código de como criar 
uma nova conta
const newUserCpf: string = process.argv[2];
const newUserName: string = process.argv[3];
const newUserAge: string = process.argv[4];

const newUserAgeNumber: number = Number(newUserAge);

const createUser: UserAccount = new UserAccount(
  newUserCpf,
  newUserName,
  newUserAgeNumber
);

if (newUserAgeNumber >= 18) {
  try {
    const fileManager: JSONFileManager = new JSONFileManager("accounts.json");
    const accountsList: any = fileManager.readDatabase();

    accountsList.push(createUser);

    fileManager.writeToDatabase(accountsList);
  } catch (error) {
    console.log(`Erro ao criar conta: ${error.message}`);
  }
} else {
  console.log("É preciso ter mais de 18 anos para criar uma conta");
}

*/

/* 3. Precisamos criar uma função pública dentro da classe que as 
acesse. Aí podemos chamar a função de fora da classe. */

/* 4. Segue exemplo de como imprimir o saldo no terminal 

    const newCpf = "12345678988";
    const newName = "Astrodev";
    const newAge = 1;

    const newAccount = new UserAccount(newCpf, newName, newAge);
    console.log(newAccount.getBalance());
*/
