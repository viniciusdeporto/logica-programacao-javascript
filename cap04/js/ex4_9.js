const form = document.getElementById("form")
const resp1 = document.getElementById("resp1")
const resp2 = document.getElementById("resp2")


form.addEventListener("submit", (e) => {
    const valor = form.valor.value;
    const tempo30 = 1.00;
    const tempo60 = 1.75;
    const tempo120 = 3.00;
    const tempoLimite = 3.50

    if (valor < tempo30) {
        resp1.innerHTML = `Valor insuficiente`;

    } else if (valor >= tempo30 && valor < tempo60) {
        resp1.innerHTML = `Tempo: 30 minutos`
        const troco = valor - tempo30
        resp2.innerHTML = `Troco R$: ${troco.toFixed(2)}`

    } else if (valor >= tempo60 && valor <= tempo120) {
        resp1.innerHTML = `Tempo: 60 minutos`
        const troco = valor - tempo60
        resp2.innerHTML = `Troco R$: ${troco.toFixed(2)}`

    } else if (valor >= tempo120 && valor <= tempoLimite) {
        resp1.innerHTML = `Tempo: 120 minutos`
        const troco = valor - tempo120
        resp2.innerHTML = `Troco R$: ${troco.toFixed(2)}`
    }


    e.preventDefault()
})