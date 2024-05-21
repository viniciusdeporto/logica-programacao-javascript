const frm = document.querySelector("form")
const btVerificar = document.querySelector("btVerificar")
const resp1 = document.getElementById("resp1")
const resp2 = document.getElementById("resp2")

const array = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.numero.value)

    array.forEach(function (n) {
        if (numero == n) {
            alert("Número não pode se repetir")
            numero.push("")
            return
        }

    })

    array.push(numero)
    frm.reset()
    frm.numero.focus()


    resp1.innerText = `Números: ${array.join(", ")}`
})


frm.btVerificar.addEventListener("click", () => {

    if (array.length == 0) {
        alert("Não há números na lista...")
        numero.focus()
        return
    }

    let ordem = true

    for(let i = 0; i < array.length - 1; i++){
        if(array[i] > array[i + 1]){
            ordem = false
            break
        }
    }

    resp2.innerText = ordem ? "Ok! números estão em ordem crescente" : "Atenção... Números não estão em ordem crescente"


})