/*EXERCÍCIO 1
a. []
b. [0, 1, 0, 1, 2, 3]
c. [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]
*/

const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}

console.log(minhaFuncao(8))

/*EXERCÍCIO 2
a. As saídas no controle são 0 e 2, que correspondem as posições dos fatores
Darvas e João dentro do array. 
b. Sim, o código continua funcionando, caso se mude as strings para números. 
*/

let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));

/*EXERCÍCIO 3
 A função cria três variáveis, duas numbers e uma array. 
 Ela soma o resultado da primeira variável. Depois esse 
 primeiro resultado é multiplicado pela segunda variável. 
 Então, coloca esses dois resultados são colocados no array. 
 O array final é retornado.  */

function somaEMultiplicacao(array) {
  let resultadoA = 0;
  let resultadoB = 1;
  let arrayFinal = [];

  for (let x of array) {
    resultadoA += x;
    resultadoB *= x;
  }

  arrayFinal.push(resultadoA);
  arrayFinal.push(resultadoB);
  return arrayFinal;
}

// EXERCÍCIO 4 - a

function idadeCachorro(a,b = 7) {
    const resultado = a*b
    return resultado
}

console.log(resultadoIdadeCachorro = idadeCachorro(4))
