const frm = document.getElementById("form")
const show1 = document.getElementById("show1")
const show2 = document.getElementById("show2")

frm.addEventListener('submit', (e) => {
    const produto = frm.produto.value;
    const preco = Number(frm.preco.value);

    const promocao = preco / 2;
    const resultado = preco * 2 + promocao;

    
    show1.innerText = `${produto} - Promoção, Leve 3 Por ${resultado.toFixed(2)}`;
    show2.innerText = `O 3° produto custa apenas R$ ${promocao.toFixed(2)}, metade do preço`;

    

    e.preventDefault()
})