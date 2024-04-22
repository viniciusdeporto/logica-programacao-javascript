const frm = document.getElementById("form")

frm.addEventListener("submit", (e) => {
    const nome = frm.nome.value;
    const nota1 = Number(frm.nota1.value)
    const nota2 = Number(frm.nota2.value)
    const media = (nota1 + nota2) / 2
    resp1.innerText = `Média das Notas - ${media}`

    if (media >= 7){
        resp2.innerText = `Parabens ${nome} você passou!`
        resp2.style.color  = 'blue'
    }else if(media >= 4){
        resp2.innerText = `Atenção ${nome}. Você está em exame`
        resp2.style.color = 'green'

    }else{
        resp2.innerText = `Infelizmente sua media foi de ${media.toFixed(2)}, foi reprovado`
        resp2.style.color = 'red'
    }

    e.preventDefault()
})