const form = document.getElementById("form")
const resp = document.getElementById("resp")

form.addEventListener("submit", (e) => {
    e.preventDefault()


    const numero = Number(form.numero.value)
    let resposta = `Entre ${numero} e 1: ${numero}`

    for (let i = numero; i >= 0; i = i - 1){
        resposta = resposta  + i + ", "

    }

    resp.innerHTML = resposta + "1."


    console.log()
})