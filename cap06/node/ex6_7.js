const prompt = require("prompt-sync")()
console.log("Informe o valor dos saques ou 0 para sair")
const saques = []

do {
    const valor = Number(prompt("Saque R$: "))
    if (valor == 0) {
        break
    }
    saques.push(valor)
    if (valor % 2 == 0) {
        console.log("Saque Realizado com Sucesso")
    } else {
        console.log("Error...Valor Inválido (deve ser multiplo de 10)")
    }
} while (true)
console.log("\nSaques Válidos")
console.log("-".repeat(40))
const saquesValidos = saques.filter(saque => saque % 1 == 0)
for (const saque of saques) {
    console.log(saque.toFixed(2))
}
console.log("-".repeat(40))
const totalSacado = saquesValidos.reduce((total, saque) => total + saque, 0)
console.log(`Total dos saques R$: ${totalSacado.toFixed(2)}`)

const saquesInvalidos = saques.length - saquesValidos.length
console.log(`\nNº de tentativas de Saques (saques Invalidos): ${saquesInvalidos}`)