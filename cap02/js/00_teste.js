const frm = document.getElementById('form');    
const show = document.getElementById('show')

frm.addEventListener('submit', (e) => {
    const nome = frm.nome.value;
    show.innerText = `Olá ${nome}`

    e.preventDefault()

})
