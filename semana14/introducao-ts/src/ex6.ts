/* 4.001 AC - Pré-História 
4.000 AC a 475 DC - Idade Antiga
476 DC a 1452 DC - Idade Média
1453 DC a 1788 DC - Idade Moderna
1789 DC a hoje - Idade Contemporânea
*/

function encontraIdade(ano: number, era?: string): string {
  if (ano < 1 || !Number.isInteger(ano)) return "Ano inválido!";

  const eraUpper: string = (era && era.toUpperCase()) || "DC";

  if (eraUpper === "AC" && ano >= 100000) return "Pré-história";

  if ((eraUpper === "AC" && ano < 100000) || (eraUpper === "DC" && ano < 476))
    return "Idade Antiga";

  if (eraUpper === "DC" && ano >= 1453 && ano < 1789) return "Idade Moderna";

  if (eraUpper === "DC" && ano >= 1789) return "Idade Contemporânea";
}
