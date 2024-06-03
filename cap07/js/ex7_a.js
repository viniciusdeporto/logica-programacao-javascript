// Seleciona o formulário e o elemento de resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Adiciona um evento ao formulário para lidar com o envio
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio padrão do formulário

    let mensagemCriptografada = ""; // Inicializa a string para a mensagem criptografada
    const mensagem = frm.mensagem.value; // Obtém a mensagem do formulário

    let letrasPares = ""; // String para letras de índices pares
    let letrasImpares = ""; // String para letras de índices ímpares

    // Itera sobre cada caractere da mensagem
    for (let i = 0; i < mensagem.length; i++) {
        if (i % 2 === 0) {
            letrasPares += mensagem[i]; // Adiciona letras de índices pares
        } else {
            letrasImpares += mensagem[i]; // Adiciona letras de índices ímpares
        }
    }

    // Combina as letras pares e ímpares
    mensagemCriptografada = letrasPares + letrasImpares;

    // Exibe a mensagem criptografada no elemento de resposta
    resp.textContent = mensagemCriptografada;
});

frm.btDescript.addEventListener("submit", (e)=>{
  e.preventDefault()
  resp.innerText = `${mensagem}`
})

