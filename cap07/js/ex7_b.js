const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const mensagem = frm.palindromo.value
    var tam = mensagem.length
    let invertida = ""
    let resultado = ""

    for (let i = tam - 1; i >= 0; i--) {
        invertida += mensagem.charAt(i)

    }



    if (invertida === mensagem) {

        resp.innerText = `Frase Invertida: ${invertida}\n${mensagem}, é um palindromo`

    } else {
        resp.innerText = `${mensagem} não é um Palindromo`
    }


    
}) 