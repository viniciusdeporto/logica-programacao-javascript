const form = document.getElementById("form")
const resp = document.getElementById("resp")

form.addEventListener("submit", (e) => {
    const num = Number(form.numero.value)

    let temDivisor = 0

    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            temDivisor = 1
            break
        }
    }

    if (num > 1 && !temDivisor) {
        resp.innerText = `${num} É primo`
    } else {
        resp.innerText = `${num} Não é primo`
    }





    // let numDivisores = 0
    // for (let i = 1; i <= num; i++) {
    //     if (num % i == 0) {
    //         numDivisores++
    //     }
    // }

    // if (numDivisores == 2) {
    //     resp.innerText = `${num} é primo`
    // } else {
    //     resp.innerText = `${num} Não é primo`
    // }

    e.preventDefault()

})