function encontraIdade(ano, era) {
    if (ano < 1 || !Number.isInteger(ano))
        return "Ano inválido!";
    const eraUpper = (era && era.toUpperCase()) || "DC";
    if (eraUpper === "AC" && ano >= 100000)
        return "Pré-história";
    if ((eraUpper === "AC" && ano < 100000) || (eraUpper === "DC" && ano < 476))
        return "Idade Antiga";
    if (eraUpper === "DC" && ano >= 1453 && ano < 1789)
        return "Idade Moderna";
    if (eraUpper === "DC" && ano >= 1789)
        return "Idade Contemporânea";
}
//# sourceMappingURL=ex6.js.map