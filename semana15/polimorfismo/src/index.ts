import { Client } from "./Client";
import { Residence } from "./Residence";
import { Commerce } from "./Commerce";
import { Industry } from "./Industry";

/* 1. a. Foi possível imprimir no terminal todas os atributos da interface Client. 
Isso aconteceu porque a Client é uma interface, ou seja, todos os seus atributos
são públicos e podem ser acessados */

const myClient: Client = {
  name: "Woody",
  registrationNumber: 1,
  consumedEnergy: 50,

  calculateBill: () => {
    return 2;
  },
};

console.log(`
Meu Cliente - Exercício 1
Nome: ${myClient.name}
ID: ${myClient.registrationNumber}
Energia consumida: ${myClient.consumedEnergy} kWh
Conta: R$${myClient.calculateBill().toFixed(2)}
`);

/* 2. a. O erro gerado é que não é possível gerar uma instância de uma classe 
abstrata 

b. Teríamos que gerar outra classe não abstrata que estendesse a classe Place 
e, a partir dela, criar uma instância

*/

/* 3. */

const myResidence: Residence = new Residence(4, "12345-67");
const myCommerce: Commerce = new Commerce(7, "78945-61");
const myIndustry: Industry = new Industry(12, "98765-25");

console.log(`
Exercício 3 
CEP Residência - ${myResidence.getCep()}
CEP Comércio - ${myCommerce.getCep()}
CEP Indústria - ${myIndustry.getCep()}
`);

/* 4. A  classe ResidentialClient possui os atributos name, registrationNumber,
consumedEnergy, herdados da interface Client. Ela também possui os atributos 
residentsQuantity e Cep, herdados da classe Residence. Além desses, ela tem um 
atributo chamado CPF, que pertence só a ela. 
Quanto a métodos, a classe ResidentialClient possui o método calculateBill, 
herdado da interface Cliente e o getCpf(), um método próprio. 
*/

/* 5. 

a. A classe ResidentialClient e Commercial Client compartilham entre si os 
atributos da interface Client (name, registrationNumber, consumedEnergy e 
o método calculateBill())

b. Elas possuem de diferente os atributos das Classes pai Commerce e Residence.
Ou seja, CommercialClient não tem o atributo residentsQuantity e a ResidentialClients
não tem o atributo floorQuantity

*/

/* 6. 

a. A IndustrialClient deve ser filha da Industry para ter acesso aos atributos
machinesQuantity e Cep.

b. A IndustrialClient implementa a interface Client, para ter acesso aos atributos
e métodos dela

*/
