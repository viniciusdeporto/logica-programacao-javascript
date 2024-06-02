const prompt = require("prompt-sync")()
const parcelas = Number(prompt("Quantas Parcelas?: "))
var data = new Date()
var vencimentos = new Date()

for(let i = 1; i < parcelas; i++){
    data.setMonth(data.getMonth() + 1)
    let dia = data.getDate()
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()

    const diaZero = dia < 10 ? "0" + dia : dia
    const mesZero = mes < 10 ? "0" + mes : mes
    console.log(`${i}ª Parcela: ${diaZero}/${mesZero}/${ano}`)
}

