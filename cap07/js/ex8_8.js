const frm = document.querySelector("form")
const resp = document.querySelector("h3")

const TAXA_MULTA = 2 / 100
const TAXA_JUROS = 0.33 / 100



frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const dataVenc = frm.inDataVenc.value
    const valor = Number(frm.inValor.value)
    const hoje = new Date()
    const vencto = new Date()


    const partes = dataVenc.split("-")
    vencto.setDate(Number(partes[2]))
    vencto.setDate(Number(partes[1]))
    vencto.setFullYear(Number(partes[0]))

    const atraso = hoje - vencto
    let multa = 0
    let juros = 0



})