const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    const ladoA = form.ladoA.value;
    const ladoB = form.ladoB.value;
    const ladoC = form.ladoC.value;

    if (ladoA == ladoB && ladoB == ladoC) {
        resp1.innerText = `Os lados podem formar um triângulo, 3 lados Iguais`
        resp2.innerText = `Tipo: Equilátero`
    }
    else if (ladoA == ladoB != ladoC || ladoB == ladoC != ladoA || ladoC == ladoB != ladoA) {
        resp1.innerText = `Os lados podem formar um triângulo, 3 lados diferentes`
        resp2.innerText = `Tipo: Escaleno`

    } 
    else if (ladoA == ladoB && ladoC != ladoB) {
        resp1.innerText = `Os lados podem formar um triângulo, 2 lados iguais`
        resp2.innerText = `Tipo: Isóceles`
    }

    e.preventDefault()
})