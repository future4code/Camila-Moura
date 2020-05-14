// INTERPRETAÇÃO DE CÓDIGO 
 /* 1. A função, quando chamada, executa um prompt que pergunta ao usuário qual a cotação do dólar no dia e
 retorna o parâmetro (valor em dólar a ser convertido) multiplicado pela cotação. A variável meuDinheiro chama
 a função e lhe dá parâmetro de 100. Por último, a variável é impressa no console. */

 /* 2. A função possui dois parâmetros, tipoDeInvestimento e valor. Dentro dela, é criada uma nova variável. 
 O switch executará um case dependendo do valor atribuído ao parâmetro tipoDeInvestimento quando a função for 
 chamada. Em cada um dos cases, dentro do switch, a variável valorAposInvestimento é igualada ao parâmetro valor 
 multiplicado por um número. Caso o parâmetro não esteja previsto no switch, ele gerará um alert para o usuário.
 O return da função é a variável (ou seja, o valor multiplicado pelo investimento). Depois, a função é chamada
 duas vezes, com diferentes parâmetros. As chamadas da função são impresas no console. No console, apareceram os 
 números 165 (novoMontante) e no caso da segunda chamada, aparecerá o alert.*/

/* 3. São colocados três arrays, o primeiros com vários elementos e os outros dois vazios. O for percorre o primeiro
array e o if seleciona os números pares (cuja divisão por dois é igual a zero) para o array1 e os outros números para 
o array2. O console.log imprimirá o tamanho de cada um dos arrays, ou seja:
Quantidade total de números, 14
6
8*/

/* 4. Há um array de números e duas variáveis. O for percorrerá o array e mudará o valor das variáveis de acordo com
a condição do if. A variável numero1 será alterada conforme o elemento do array seja menor que o valor de numero1. 
Ou seja, no final, o valor de numero1 será o menor número do array. A variável numero2 faz o contrário e seu valor final
será o maior número do array. Valores no console seriam: 
-10
1590 */


// LÓGICA DA PROGRAMAÇÃO 
/* 1. É possível percorrer um array com callbacks, como forEach(), map() e filter(). O forEach() irá iterar sobre os
itens do array, para utilizá-las. O map cria um novo array do mesmo tamanho do original. Já o filter() cria um novo 
array filtrando informações do original. No exemplo abaixo, é usado map() para triplicar os valores do array original.*/

let arrayEx1 = [10, 90, 68, 47, 13, 50]

function triplicar (numero, index, array) {
    return numero * 3;
}

let arrayTri = arrayEx1.map(triplicar)
console.log(arrayTri) 

/*2.
a) false
b) true
c) true
d) true
e) true */

/*3. Não, o código não funciona. Os dados também levam um loop infinito por falta de incremento. 
Segue código abaixo corrigido:*/

const quantidadeDeNumerosPares
let i = 0
while(i < quantidadeDeNumerosPares) {
    console.log(i*2)
    i++
}

/* 4 */
function triangulo(a, b, c) {
    if (a === b && c === b) {
        return "Triângulo equilátero"
    } else if (a === b || a === c || b === c){
        return "Triângulo isósceles"
    } else if (a !== b && b !== c) {
        return "Triângulo escaleno"
    }
}

/* 5 */

function exCinco (a, b) {
    if (a > b)  {
        console.log(`O maior é: ${a}`)
        if (b % a !== 0) {
            console.log(`${b} não é divisível por ${a}`)
        } 
        if (a % b === 0) {
            console.log(`${a} é divisível por ${b}`)
        }
        let diferenca1 = a - b
        console.log(`A diferença entre eles é ${diferenca1}`)

    } else if (b > a) {
        console.log(`O maior é: ${b}`)
        if (a % b !== 0) {
            console.log(`${a} não é divisível por ${b}`)
        } 
        if (b % a === 0) {
            console.log(`${b} é divisível por ${a}`)
        }
        let diferenca2 = b - a
        console.log(`A diferença entre eles é ${diferenca2}`)
    }
}

exCinco (15, 30) 

/* FUNÇÕES */

/* 1 */
let arrayExFuncoes = [10, 90, 54, 37, 88, 25, 62, 13, 77]

function segundoNumero () {
    arrayExFuncoes.sort(function(a, b) {return a - b})
    return console.log(arrayExFuncoes[1], arrayExFuncoes[7])
}

segundoNumero()
 
/* 2 */
let alerta = () => {
    return alert("Hello Labenu");
}

const ola = alerta

/* OBJETOS */

/* 1 - Os arrays são maneiras de guardar mais de uma informação ao mesmo tempo. Já o objeto permite guardar
dados mais complexos, com propriedades que podem acessadas posteriormente. Um array pode ser feito de vários
objetos, se necessário. */

/* 2 */

function criaRetangulo (lado1, lado2) {
    let dadosRetangulo = {
        altura: lado1,
        largura: lado2, 
        perimetro: 2 * (lado1 + lado2),
        area: lado1 * lado2
    }
    return dadosRetangulo
}

/* 3 */

let melhorFilme = {
    titulo: "Toy Story 3",
    ano: "2010",
    diretor: "Lee Unkrich",
    dubladores: "Marco Ribeiro, Guilherme Briggs, Mabel Cezar"
}

console.log(`Venha assistir ao filme ${melhorFilme.titulo}, de ${melhorFilme.ano}, dirigido por ${melhorFilme.diretor} e dublado por ${melhorFilme.dubladores}`)

/* 4 */
 let pessoa = {
     nome: "João Simões",
     idade: 20,
     email: "joao.simoes@gmail.com",
     endereco: "Rua Amsterdã, 108, Pouso Alegre"
 }

 function anonimizarPessoa () {
     let anonimo = {
        ...pessoa,
        nome: "Anônimo"
     }
    return anonimo
 } 

/* FUNÇÕES DE ARRAY */

/* 1 */

let pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const adultos = pessoas.filter((adulto, index, array) => {
    if (adulto.idade >= 20) {
        return true
    }
    return false 
})

console.log(adultos)

const adolescentes = pessoas.filter((adolescente, index, array) => {
    if (adolescente.idade < 20) {
        return true
    }
    return false 
})

console.log(adolescentes)

/* 2 */
const arrayEx2 = [1, 2, 3, 4, 5, 6]

const multiplicadoPor2 = arrayEx2.map((numero, index, array) => {
    return numero * 2
})

const multiplicadoPor3 = arrayEx2.map((numero, index, array) => {
    return numero * 3
})

const parImpar = arrayEx2.map((numero, index, array) => {
    if (numero % 2 === 0) {
       return `${numero} é par` 
    } else if(numero % 2 !== 0) {
        return `${numero} é ímpar`
    }
})

/* 3 */
const parque = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const podemEntrar = parque.filter((autorizado, index, array) => {
    if ((autorizado.altura >= 1.5) && (autorizado.idade >= 14) && (autorizado.idade <= 60)) {
        return true
    }
    return false 
})

console.log(podemEntrar)

const proibidoEntrar = parque.filter((proibido, index, array) => {
    if ((proibido.altura < 1.5) || (proibido.idade < 14) || (proibido.idade > 60)) {
        return true
    }
    return false 
})

/* 4 */

/* 5 */

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((cliente, index, array) => {
    compras => {
        return compras.reduce((a, b) => a + b, 0);
    }
    cliente.saldoTotal -= compras
})
