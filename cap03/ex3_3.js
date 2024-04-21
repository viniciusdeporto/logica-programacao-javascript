const prompt = require("prompt-sync")()
const salario = Number(prompt("Digite o salario: "))
const nome = prompt("Digite seu nome: ")
const tempo = Number(prompt("Tempo de trabalho (anos): "))
const quadrienios = Math.floor(tempo / 4);
const acrescimo = salario * quadrienios / 100;

console.log(`Quadriênios: ${quadrienios}`)
console.log(`Salario Final do ${nome} R$ ${(salario+acrescimo).toFixed(2)}`)