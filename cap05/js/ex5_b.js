const form = document.getElementById("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    const chin = Number(form.chinchilas.value)
    const anos = Number(form.anos.value)

    let resultado = ""
    let valorDuplicado = 0;
    for (let i = 1; i <= anos; i++) {

        valorDuplicado = i * chin       
        
        resultado = resultado + `${i}º Ano: ${valorDuplicado} Chinchilas\n`

    }

    resp.innerText = resultado


    e.preventDefault()
})  