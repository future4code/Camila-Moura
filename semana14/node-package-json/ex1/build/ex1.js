"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
/* a) Acessamos os parâmetros passados na linha de comando pelo process.argv */
const nameData = fs.readFileSync("./names.json").toString();
let names;
try {
    names = JSON.parse(nameData);
}
catch (e) {
    names: [];
    console.log("Erro ao ler a base de dados " + e.message);
}
const age = Number(process.argv[2]);
names.map((name) => {
    console.log(`Olá, ${name.nome}! Você tem ${name.idade} anos.`); // b)
    console.log(`Em sete anos, você terá ${Number(name.idade) + 7}.`); // c)
});
