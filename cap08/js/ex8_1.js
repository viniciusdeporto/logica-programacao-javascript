// let nome = prompt("Qual seu nome?: ")
// let idade = Number(prompt("Qual sua Idade?: "))

// let situacao = (nome, idade) => {
//     alert(`Olá ${nome}, seja Bem-Vindo(a), sabemos que você tem ${idade} anos de idade`)
// }

// situacao(nome, idade)

let nota = Number(prompt("Nota: "))
let media = Number(prompt("Media: "))
const situacao = (nota, media) => {
    const resultado = nota >= media ? "Aprovado" : "Reprovado"
    return resp.innerText = `${resultado}`
}

situacao(nota, media)