const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const senha = frm.inSenha.value;
    const erros = []

    if(senha.length < 8 && senha.length > 15){
        erros.push("Possuir entre 8 e 15 caracteres")
    }

    if(senha.match(/[0-9]/g) == null){
        erros.push("Possuir números(no minimo, 1)")
    }

    if(!senha.match(/[A-Z]/g)){
        erros.push("Possuir letras minusculas (no minimo, 1)")
    }

    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1){
        erros.push("Possuir letras maiusculas (no minimo, 2)")
    }

    if(!senha.match(/[\W|_]/g)){
        erros.push("Possuir simbolos (no minimo, 1)")
    }

    if(erros.length == 0){
        resp.innerText = "Ok! Senha Válida"
    }else{
        resp.innerText = `Erro...A senha deve ${erros.join(", ")}`
    }

})