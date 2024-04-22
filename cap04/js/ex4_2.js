const frm = document.getElementById('frm')
const resp = document.getElementById('resp')

frm.addEventListener('submit', (e) => {
    

    const nome = frm.nome.value;
    const masculino = frm.masculino.value;
    const altura = Number(frm.altura.value)

    // let peso;
    // if(masculino){
    //     peso = 22 * Math.pow(altura, 2)
    // }else{
    //     peso == 21 * Math.pow(altura, 2)
    // }

    let peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}`

    e.preventDefault()

})

frm.addEventListener('reset', () => {
    resp.innerHTML = "";
})
