const frm = document.getElementById("form")
const show = document.getElementById("resp")

frm.addEventListener('submit', (e) => {
    const valor = Number(frm.valor.value)
    const tempo = Number(frm.tempo.value)

    const resultado = Math.ceil((tempo / 15)) * valor;
    show.innerText = `Valor a Pagar R$ ${resultado.toFixed(2)}`

    e.preventDefault()
})