/* a) Ao tentar atribuir o valor de um número a variável,
o VSCode aponta que há um erro  */

const minhaString: string = "R2-D2";

/* b) */

const meuNumero: number | string = 20;

/* c) */

const rey: { nome: string; idade: number; corFavorita: string } = {
  nome: "Rey",
  idade: 17,
  corFavorita: "azul",
};

/* d) e e) */

enum Cores {
  AMARELO = "amarelo",
  VERDE = "verde",
  AZUL = "azul",
  VIOLETA = "violeta",
  ROSA = "rosa",
  VERMELHO = "vermelho",
  LARANJA = "laranja",
}

type pessoa = {
  nome: string;
  idade: number;
  corFavorita: Cores;
};

const finn: pessoa = {
  nome: "Finn",
  idade: 17,
  corFavorita: Cores.AMARELO,
};

const poe: pessoa = {
  nome: "Finn",
  idade: 21,
  corFavorita: Cores.LARANJA,
};

const kylo: pessoa = {
  nome: "Kylo Ren",
  idade: 22,
  corFavorita: Cores.VERMELHO,
};
