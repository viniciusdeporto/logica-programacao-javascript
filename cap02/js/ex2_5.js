const frm = document.getElementById('form')
// const medicamento = document.getElementById("medicamento")
// const preco = document.getElementById("preco")
const show1 = document.getElementById("resp1")
const show2 = document.getElementById("resp2")

frm.addEventListener('submit', (e) => {
    const medicamento = frm.medicamento.value;
    show1.innerText = `Promoção ${medicamento}`

    const preco = Math.floor(Number(frm.preco.value))
    
    const promocao = preco * 2;

    show2.innerText = `Leve 2 e pague R$ ${promocao}`


    e.preventDefault()
})