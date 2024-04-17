const frm = document.getElementById("form")
const resp1 = document.getElementById("resp1")

frm.addEventListener('submit', (e) => {
    const quilo = Number(frm.quilo.value)
    const consumo = Number(frm.consumo.value)

    const preco = (quilo / 1000) * consumo
    resp1.innerText = `Valor a pagar é R$ ${preco}`
    
    e.preventDefault()

})