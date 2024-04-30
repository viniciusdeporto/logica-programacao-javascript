const form = document.getElementById("form")
const resp = document.getElementById("resp")
const resp2 = document.getElementById("resp2")

form.addEventListener("submit", (e) => {
    const numeroP = Number(form.numero.value)

    let contador = 0;
    let acumulador = 0;

    for (let i = 2; i <= numeroP; i--) {
        
        if(numeroP % 2 == 0){
            acumulador = i
        }
    }

    // resp.innerText = `Divisores de ${numeroP}: ${acumuladores} (Soma: ${numeroP})`
    // resp2.innerText = `${numeroP} é um número Perfeito`



    e.preventDefault()
})