const form = document.getElementById("form")
const resp1 = document.getElementById("resp1")
const resp2 = document.getElementById("resp2")

let resposta = ""
let numContas = 0
let valTotal = 0

form.addEventListener("submit", (e) => {

    e.preventDefault()

    const descricao = form.descricao.value;
    const valor = Number(form.valor.value)

    numContas++
    valTotal += valor
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
    resp1.innerHTML = `${resposta}-------------------------------`
    resp2.innerHTML = ` ${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    form.descricao.value = ""
    form.valor.value = ""
    form.descricao.focus()





})