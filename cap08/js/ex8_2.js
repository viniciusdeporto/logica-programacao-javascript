const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const modelo = frm.inModelo.value;
    const ano = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)
    const classificacao = classificarVeiculo(ano)
    const entrada = calcularEntrada(preco, classificacao)
    const parcela = (preco - entrada) / 10

    resp1.innetText = modelo + " - " + classificacao
    resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`
    resp2.innerText = `+10 de R$: ${parcela.toFixed(2)}`

})