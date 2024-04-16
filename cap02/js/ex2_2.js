//cria referencia ao form e aos elementos h2 3 h3
let frm = document.querySelector("form")
let resp = document.getElementsByTagName("h2")[0]
let resp2 = document.querySelector("h3")


//cfia um ouvinte de eventos, acionando quando um botao de ouvinte for clicado
frm.addEventListener("submit", (e) => {
    let titulo = frm.titulo.value;
    let duracao = Number(frm.duracao.value)

    let horas = Math.floor(duracao / 60)
    let minutos = duracao % 60;

    resp.innerText = titulo;
    resp2.innerText = `${horas} hora(s) e ${minutos} Minuto(s)`

    e.preventDefault()
})