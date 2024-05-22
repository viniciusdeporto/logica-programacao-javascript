const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const candidatos = []

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const nome = frm.inNome.value
    const acertos = Number(frm.inAcertos.value)

    candidatos.push({nome, acertos})
    frm.inNome.value = ""
    frm.inAcertos.value = ""
    frm.inNome.focus()

    frm.btListar.dispatchEvent(new Event("click"))


})

frm.btListar.addEventListener("click", () => {

    if(candidatos.length == 0){
        alert("Não há candidatos na lista")
        return
    }

    let lista = ""

    for(let candidato of candidatos){
        lista += `${candidato.nome} - ${candidato.acertos} acertos\n`
    }

    resp.innerText = lista


})

frm.btAprovados.addEventListener("click", ()=>{
    if(candidatos.length == 0){
        alert("Não há candidatos na lista")
        return
    }

    const corte = Number(prompt("Número de acertos para Aprovação?"))

    if(corte == 0 || isNaN(corte)){
        alert("Número Invalido")
        return
    }

    const copia = candidatos.slice()

    copia.sort((a, b) => {a.nome - b.acertos})

    copia.reverse()

    let aprovados = ""

    for(let candidato of copia){
        if(candidato.acertos >= corte){
            aprovados += `${candidato.nome} - ${candidato.acertos}\n`
        }
    }

    if(aprovados == ""){
        resp.innerText = "Não há candidatos aprovados..."
    }else{
        resp.innerText = aprovados
    }



})

