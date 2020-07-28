/* a) A entrada é um array de números e a saída é um objeto
b) As outras variáveis que compõem a função são numerosOrdenados,
soma e estatisticas. */

type dadosEstatisticas = {
  maior: number;
  menor: number;
  media: number;
};

function obterEstatisticas(numeros: number[]): dadosEstatisticas {
  const numerosOrdenados: number[] = numeros.sort((a, b) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: dadosEstatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

/* c) */

type amostraDeIdades = {
  numeros: number[];
  obterEstatisticas: () => dadosEstatisticas;
};
