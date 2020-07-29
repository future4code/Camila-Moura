"use strict";
const add = Number(process.argv[2]) + Number(process.argv[3]);
console.log(`Adição: ${add}`);
const sub = Number(process.argv[2]) - Number(process.argv[3]);
console.log(`Subtração: ${sub}`);
const mult = Number(process.argv[2]) * Number(process.argv[3]);
console.log(`Multiplicação: ${mult}`);
const div = Number(process.argv[2]) / Number(process.argv[3]);
console.log(`Divisão: ${div}`);
