const form = document.getElementById("form")
const resp = document.getElementById("resp")

form.addEventListener("submit", (e) => {
    const quantidade = Number(form.numero.value)

    let estrela= ""

    for (let i = 1; i <= quantidade; i++) {
        if (i % 2 == 1) {
            estrelas = estrelas + "*"
        } else {
            estrelas = estrelas + "."
        }
    }

    resp.innerText = estrelas



    e.preventDefault()

})

