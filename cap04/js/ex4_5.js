const form = document.getElementById("form")

form.addEventListener('submit', (e) => {

    const numero = Number(form.numero.value)
    const raiz = Math.sqrt(numero)

    if (Number.isInteger(raiz)){
        resp.innerText = `Raiz: de ${numero} é ${raiz}`
    }else{
        resp.innerText = `Não há raiz exata para ${numero}`
    }

    e.preventDefault()
})