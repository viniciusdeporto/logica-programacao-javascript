const form = document.getElementById("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = form.paciente.value;
    pacientes.push(nome)
    let lista = ""
    for (let i = 0; i < pacientes.length; i++){
        lista += `${i + 1}. ${pacientes[i]}\n`
    }
    respLista.innerText = lista
    form.paciente.value = ""
    form.paciente.focus()
})

form.urgencia.addEventListener("click", ()=>{
    if(!form.checkValidity()){
        alert("Informe o nome do paciente a ser entendido em caráter de urgencia")
        form.paciente.focus()
        return
    }
    pacientes.forEach((paciente, i)=>(lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista
    form.paciente.value = ""
    form.paciente.focus()
})

form.atender.addEventListener("click", ()=>{
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera")
        form.paciente.focus()
        return
    }
    const atender = pacientes.shift()
    respNome.innerText = atender
    let lista = ""
    pacientes.forEach((paciente, i)=>(lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista
})
