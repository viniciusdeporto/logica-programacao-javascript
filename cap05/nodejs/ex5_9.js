const prompt = require("prompt-sync")()

const produto = prompt("Digite o nome do produto: ")
const etiquetas = Number(prompt("Quantas etiquetas: "))

let quantidade = ""

for(let i = 1; i <= etiquetas / 2; i++){
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}

if(etiquetas % 2 == 1){
    console.log(produto)
}