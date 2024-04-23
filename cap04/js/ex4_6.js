const form = document.getElementById("form")

form.addEventListener("submit", (e) => {

    e.preventDefault()

    const saque = Number(form.valor.value)

    if (saque % 10 != 0) {
        alert("Valor invalido para notas disponiveis (R$ 10, 50, 100)")
        form.valor.focus()
        return
    }

    const notasCem = Math.floor(saque / 100)
    let resto = saque % 100
    const notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50
    const notasDez = Math.floor(resto / 10)

    if (notasCem > 0) {
        resp.innerText = `Notas de R$ 100: ${notasCem}`
    }
    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
    }
    if (notasDez > 0) {
        resp3.innerText = `Notas de R$ 10: ${notasDez}`
    }

    
    
})