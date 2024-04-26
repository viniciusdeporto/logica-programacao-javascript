const form = document.getElementById("form")
const resp = document.getElementById("resp")

form.addEventListener("submit", (e) => {
    
    const numero = Number(form.numero.value)
    let resposta = ""
    for (let i = 1; i <= 10; i++) {
        resposta = resposta + numero + " x " + i + " = " + (numero * i) + " \n"
        // resposta = `${resposta}${numero} x ${i} = ${numero * i} \n`
    }
    
    
    resp.innerText = resposta;
    
    e.preventDefault()
})