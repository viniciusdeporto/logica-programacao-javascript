const form = document.getElementById("form")
const resp = document.getElementById("resp")

form.addEventListener("submit", (e) => {
    const chin = Number(form.chinchilas.value)
    const anos = Number(form.anos.value)

    let resultado = ""
    for (let i = 1; i <= anos; i++) {

        resultado = resultado + `${i}º Ano: ${chin} Chinchilas\n`

    }

    resp.innerText = resultado


    e.preventDefault()
})