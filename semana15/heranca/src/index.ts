import { User } from "./User";
import { Customer } from "./Customer";
import { Employee } from "./Employee";
import { Seller } from "./Seller";

/* 1. 

a. Não, não seria possível imprimir o password porque ele é um atributo privado da classe
e não foi feito um getter para acessá-lo.

b. A mensagem "Chamando o construtor da classe User" só apareceu uma vez no terminal

*/

/* const myUser = new User("1", "astrodev@labenu.com.br", "Astrodev", "3007");
console.log(`
Id: ${myUser.getId()}
Nome: ${myUser.getName()}
Email: ${myUser.getEmail()}
`); */

/* 2. 

a. A mensagem "Chamando o construtor da classe Customer" só apareceu uma vez no terminal

b. A mensagem "Chamando o construtor da classe User" só apareceu uma vez no terminal, porque 
ele foi chamado para podermos acessar as propriedades da classe User compartilhadas com a 
classe Customer. 

*/

/* 3. a. Não é possível imprimir o password, porque ele é um atributo privado da classe User. */

/* 3, 4 e 5 */

/* const myCustomer = new Customer(
  "2",
  "r2d2@resistencia.sw",
  "R2-D2",
  "luke",
  "1234456"
);

console.log(`
Id: ${myCustomer.getId()}
Nome: ${myCustomer.getName()}
Email: ${myCustomer.getEmail()}
Cartão de crédito ${myCustomer.getCreditCard()}
Total da compra: ${myCustomer.purchaseTotal}
Mensagem: ${myCustomer.introduceYourself()}
`); */

/* 6 e 7

a. A mensagem "Chamando o construtor da classe User" só apareceu uma vez no terminal

b. É possível imprimir no terminal ID, Nome, Email, data de admissão e salário base

*/

/* const myEmployee = new Employee(
  "3",
  "c3po@resistencia.sw",
  "C3PO",
  "medo",
  "18/11/1977",
  2500
);

console.log(`
Id: ${myEmployee.getId()}
Nome: ${myEmployee.getName()}
Email: ${myEmployee.getEmail()}
Data de admissão ${myEmployee.getAdmissionDate()}
Salário: ${myEmployee.getBaseSalary()}
Salário com benefícios: ${myEmployee.calculateTotalSalary()}
`); */

/* 8 

a. Os parâmetros que devem ser passados são id, email, nome, senha, data de admissão e salário

b. É possível imprimir ID, Email, Nome, mensagem de introdução, salário base, salário com 
benefícioss e data de admissão. Não é possível imprimir a senha, pois ela é um atributo privado
da classe User. 

*/

const mySeller = new Seller(
  "4",
  "marvin@heartofgold.com",
  "Marvin",
  "42",
  "25/05/1980",
  1000
);

/* console.log(mySeller.getId());
console.log(mySeller.getEmail());
console.log(mySeller.getName());
console.log(mySeller.introduceYourself());
console.log(mySeller.getBaseSalary());
console.log(mySeller.getAdmissionDate());
console.log(mySeller.calculateTotalSalary());
 */

/* 9. */

/* console.log(mySeller.getSalesQuantity());
console.log(mySeller.setSalesQuantity(2));
 */

/* 10 No terminal foi impresso o valor total do salário de acordo com a método 
calculateTotalSalary que foi sobrescrito na classe Seller. Nesse caso, o valor 
foi de 475. 
*/

const newSeller = new Seller(
  "5",
  "walle@terra.com",
  "WALL-E",
  "Eva",
  "20/01/3001",
  50
);

newSeller.setSalesQuantity(5);
newSeller.calculateTotalSalary();

console.log(newSeller.calculateTotalSalary());

/* 11. */
