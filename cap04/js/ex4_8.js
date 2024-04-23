const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    const velocidade = Number(form.velocidade.value)
    const condutor = Number(form.vCondutor.value)

    const limite = (20 * velocidade) / 100;
    const vLimite = velocidade + limite
    const tolerancia = vLimite + 3;

    if (condutor > velocidade && condutor <= vLimite) {
        resp.innerText = `Multa Leve`
    } else if (condutor >= vLimite) {
        resp.innerText = `Multa Grave`
    } else {
        resp.innerText = `Sem Multa`
    }

    e.preventDefault()

})