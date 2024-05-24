const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value.trim();

    if(!nome.includes(" ")){
        alert("Informe o Nome Completo")
        return
    }

    const priEspaco = nome.indexOf(" ")
    const ultEspaco = nome.lastIndexOf(" ")

    let cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco)

    resp.innerText = `Crachá: ${cracha}`
})