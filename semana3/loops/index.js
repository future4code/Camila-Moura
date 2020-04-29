/*EXERCÍCIO 1
Enquanto a i for menor que 15, o for continuará somando o valor
da sum com o valor de i. Na sequência do loop, o valor inicial
das variáveis i e sum é 0. Ou seja, quando i for 1, sum também 
será 1. Mas quando i for 2, sum será 3, porque somou-se o 
2(valor atual de i) + 1 (valor de sum determinado na sequência 
imediatamente anterior). 
A lógica se repete até i chegar a 15, onde sum terá o valor de 
105, que é o que aparece no terminal. */

let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum) 

/* EXERCÍCIO 2 
a. O comando push adiciona um novo item em um array. Nesse caso, 
o push adiciona na variável novaLista números do array lista
que sejam divisíveis por 5.

b. Valor impresso no console é o da variável novaLista, números 
do array lista divisíveis por 5: 10, 15, 25, 30

c. Caso mude a variável numero para 3, o terminal mostrará os elementos 
de lista que sejam divisíveis por 3: 12, 15, 18, 21, 30.
Com 4, seguiria a mesma lógica e o terminal mostraria: 12*/

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)

// array abaixo será usado para o exercício 3
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//resposta item a.
let maiorNumero = array[0]
let menorNumero = array[0]

for (let i = 0; i < array.length; i++) {
    if (array[i] > maiorNumero) {
        maiorNumero = array[i]
    }
}

for (let i = 0; i < array.length; i++) {
    if (array[i] < menorNumero) {
        menorNumero = array[i]
    }
}

console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)

//resposta item b. 
let novoArray = []

for (let numero of array) {
    novoArray.push(numero / 10)
}

console.log(novoArray)

//resposta item c. 
let novoArray2 = []

for (let numero of array) {
    if(numero % 2 === 0) {
        novoArray2.push (numero)
    }
}

console.log(novoArray2)

// resposta item d. 
let indice = []

for (let i = 0; i < array.length; i++) {
    indice.push(`O elemento do index ${i} é ${array[i]}`)
}

console.log(indice)

