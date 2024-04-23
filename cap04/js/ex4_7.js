const form = document.getElementById("form")
const resp = document.getElementById("resp")

form.addEventListener("submit", (e) => {

    const numero = Number(form.numero.value)
    // if(numero % 2 == 0){
    //     resp.innerText = `O numero ${numero} é Par`
    // }else{
    //     resp.innerHTML = `O numero ${numero} é Impar`
    // }

    const resp1 = numero % 2 == 0 ? `O numero ${numero} é Par` : `O numero ${numero} é Impar`

    resp.innerText = resp1;



    e.preventDefault()
})