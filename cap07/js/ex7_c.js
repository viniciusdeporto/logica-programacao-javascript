/* Supnha que o prazo para o pagemnto de uma infração de trânsito com desconto
seja de 90 dias. Elaborar um programa que leia a data de uma infração e o valor
da multa Informe qual a data limite do pagamento com desconto(até 90 dias) e o 
valor a ser pago até essa data(com 20% de desconto). */

const frm = document.querySelector("form")
const resp1 = document.getElementById("resp1")
const resp2 = document.getElementById("resp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()


    const dataMulta = frm.data.value
    const valorMulta = Number(frm.multa.value)
    const vencimento = new Date()

    
    

    
    

    resp1.innerText = `${dataMulta}`
    resp2.innerText = `${valorMulta}`
})

