/* EXERCÍCIO 1 

O código diferencia números pares de ímpares. Ele faz isso ao idenficar 
os números pares primeiro, ou seja, aqueles cuja divisão por 2 possui 
resto igual a zero. Caso resto seja diferente de zero, o número é ímpar.
A mensagem "Passou no teste" aparece com números pares e a mensagem 
"Não passou no teste" aparece com números ímpares.*/

const respostaDoUsuario = prompt("Exercício 1 - Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

/* EXERCÍCIO 2
a. O código serve para, ao usuário escolher uma fruta, o console mostrar
o preço da mesma. 
b. "O preço da fruta Maçã é R$ 2.25"
c. O preço total seria de R$ 24.55
d. Caso retirado o break, o preço da Pêra será de R$ 5 (que é o preço do
    default, logo abaixo)
*/

let fruta = prompt("Exercício 2 - Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; 
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/* EXERCÍCIO 3
A mensagem no terminal diz que a variável mensagem não existe no index.
Isso acontece porque a variável está dentro de um bloco e o console.log
fora desse bloco.*/

const numero1 = prompt("Exercício 3 - Digite o primeiro número.")
const numero2 = prompt("Exercício 3 - Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)

/* EXERCÍCIO 4 - a
Quando digito dois números iguais, eles aparecem no terminal um 
ao lado do outro*/

let ex4numero1 = prompt("Exercício 4a - Digite o primeiro número:")
let ex4numero2 = prompt("Exercício 4a - Digite o segundo número:")

ex4numero1 = Number(ex4numero1)
ex4numero2 = Number(ex4numero2)

if (ex4numero1 > ex4numero2) {
    console.log(ex4numero1, ex4numero2)
} else (ex4numero2 > ex4numero1); {
    console.log(ex4numero2, ex4numero1)
}


/* EXERCÍCIO 4 - b e c
Quando digito três números iguais, os três aparecem no Console.*/

let ex4numero3 = prompt("Exercício 4b - Digite o primeiro número:")
let ex4numero4 = prompt("Exercício 4b - Digite o segundo número:")
let ex4numero5 = prompt("Exercício 4b - Digite o terceiro número:")

ex4numero3 = Number(ex4numero3)
ex4numero4 = Number(ex4numero4)
ex4numero5 = Number(ex4numero5)

if (ex4numero3 > ex4numero4 && ex4numero4 > ex4numero5) {
    console.log(ex4numero3, ex4numero4, ex4numero5)
} else if (ex4numero5 > ex4numero3 && ex4numero3 > ex4numero4) {
    console.log(ex4numero5, ex4numero3, ex4numero4)
} else if (ex4numero4 > ex4numero5 && ex4numero5 > ex4numero3) {
    console.log(ex4numero4, ex4numero5, ex4numero3)
} else if (ex4numero3 > ex4numero5 && ex4numero5 > ex4numero4) {
    console.log(ex4numero3, ex4numero5, ex4numero4)
} else if (ex4numero4 > ex4numero3 && ex4numero3 > ex4numero5) {
    console.log(ex4numero4, ex4numero3, ex4numero5)
} else (ex4numero5 > ex4numero4 && ex4numero4 > ex4numero3); {
    console.log(ex4numero5, ex4numero4, ex4numero3) 
}

if (ex4numero3 === ex4numero4 && ex4numero4 === ex4numero5) {
    console.log("Por favor, insira pelo menos um número diferente")
}


/* EXERCÍCIO 5 - a 
Link do esquema: https://drive.google.com/file/d/1Xcvfpowe0SQ0eJ62zSBC2s0_2f0sDGJL/view?usp=sharing */

// EXERCÍCIO 5 - b
let ossos = prompt("O animal possui ossos no esqueleto?")
let pelos = prompt("Possui pelos?")
let racional = prompt("É racional?")
let mamifero = prompt("É mamífero?")
let penas = prompt("Possui penas?")
let terrestre = prompt("É animal terrestre?")

if (ossos === "Não") {
    console.log("O animal é invertebrado")
} else if (ossos === "Sim") {
    console.log("O animal é vertebrado")
}

if (pelos === "Não") {
    console.log("O animal não é mamífero")
} else if (pelos === "Sim") {
    console.log("O animal é mamífero")
}

if (racional === "Não") {
    console.log("O animal é um mamífero não racional")
} else if (racional === "Sim") {
    console.log("O animal é o ser humano")
}

if (mamifero === "Não") {
    console.log("O animal não é um mamífero")
} else if (mamifero === "Sim") {
    console.log("O animal é um mamífero")
}

if (penas === "Não") {
    console.log("O animal não é uma ave")
} else if (penas === "Sim") {
    console.log("O animal é uma ave")
}

if (terrestre === "Não") {
    console.log("O animal é um peixe")
} else if (terrestre === "Sim") {
    console.log("O animal é um réptil")
}