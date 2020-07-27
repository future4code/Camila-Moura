type operacoes = {
  soma: number;
  subtracao: number;
  multiplicacao: number;
  maiorNumero: number;
};

function sum(a: number, b: number): operacoes {
  const resultado: operacoes = {
    soma: a + b,
    subtracao: a - b,
    multiplicacao: a * b,
    maiorNumero: a > b ? a : b,
  };
  return resultado;
}
