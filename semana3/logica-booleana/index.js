/*RESPOSTAS EX. 1
a. false
b. false
c. true
d. false
e. boolean */

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)

console.log("e. ", typeof resultado)

/*RESPOSTAS EXERCÍCIO 2
a.  Arrays são tipos de variáveis que são usados para guardar mais de uma informação. Array é declarado entre colchetes.
b.  O index inicial de um array é 0.
c.  O tamanho do array pode ser determinado por array.length
d.  I. undefined
    II. null
    III. 11
    IV. 3 e 4 
    V. 19 e 9
    VI. 3
    VII. 1
*/

let array
console.log('I. ', array)

array = null
console.log('II. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)

// EXERCÍCIO CÓD. 1
let fahrenheit1 = 77
let resultado1 = (fahrenheit1 - 32)*5/9 + 273.15
console.log("1.a) ", resultado1, "K")

let celsius1 = 80
let resultado2 = (celsius1)*9/5 + 32
console.log("1.b) ", resultado2, "F")

let celsius2 = prompt("Insira valor em Celsius para Fahrenheint aqui")
let resultado3 = (celsius2)*9/5 + 32
console.log("1.c) ", resultado3, "F")

let celsius3 = prompt("Insira valor em Celsius para Kelvin aqui")
let resultado4 = celsius3 + 273.15
console.log("1.c) ", resultado4, "K")

// EXERCÍCIO CÓD. 2
let p1 = prompt("Qual a melhor casa de Westeros?")
console.log("1. Qual a melhor casa de Westeros? Resposta: ", p1)

let p2 = prompt("Qual o melhor filme da trilogia nova de Star Wars e porque é o Episódio 8?")
console.log("2. Qual o melhor filme da trilogia nova de Star Wars e porque é o Episódio 8? Resposta: ", p2)

let p3 = prompt("Quem estava certo na Guerra Civil, Tony ou Steve?")
console.log("3. Quem estava certo na Guerra Civil, Tony ou Steve? Resposta: ", p3)

let p4 = prompt("Você está assistindo BBB20?")
console.log("4. Você está assistindo BBB20? Resposta: ", p4)

let p5 = prompt("Uma indicação de livro?")
console.log("5. Uma indicação de livro? Resposta: ", p5)

// EXERCÍCIO CÓD. 3
let casa1 = 280
let resultadokwh = casa1 * 0.05
console.log("3a) O valor pago será de R$", resultadokwh)

let resultadoComDesconto = resultadokwh - (resultadokwh * 0.15)
console.log("3b) O valor pago com desconto de 15% será de R$", resultadoComDesconto)

//DESAFIO 
let libras1 = 20
let resultadoDesafioA = libras1 / 2.205
console.log("a) 20 lb equivalem a", resultadoDesafioA, "kg")

let onca1 = 10.5
let resultadoDesafioB = onca1 / 35.274
console.log("b) 10.5oz equivalem a", resultadoDesafioB, "kg")

let milha1 = 100
let resultadoDesafioC = milha1 * 1609.34
console.log("c) 100mi equivalem a", resultadoDesafioC, "m")

let pes1 = 50
let resultadoDesafioD = pes1 / 3.281
console.log("d) 50ft equivalem a", resultadoDesafioD, "m")

let gal1 = 103.56
let resultadoDesafioE = gal1 * 3.785
console.log("e) 103.56 equivalem a", resultadoDesafioE, "l")

let xic1 = 450
let resultadoDesafioF = (xic1 * 6) / 25
console.log("f) 450xic equivalem a", resultadoDesafioF, "l")

let libras2 = prompt("Coloque valor em libras aqui")
let resultadoDesafioG = libras2 / 2.205
console.log("g)", libras2, "lb equivalem a", resultadoDesafioG, "kg")