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
        console.log(a)
        let diferenca1 = a - b
        console.log(`A diferença é ${diferenca1}`)
    } else {
        console.log(b)
        let diferenca2 = b - a 
        console.log(`A diferença é ${diferenca2}`)
    }

    if ((a % b === 0) || (b % a === 0)) {
        console.log("Os números são divisíveis!")
    }
}