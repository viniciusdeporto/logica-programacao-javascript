const form = document.getElementById("form")
const resp = document.getElementById("resp")

form.addEventListener("submit", (e) => {
    const fruta = form.fruta.value;
    const numero = Number(form.numero.value);


    let repeticao = ""
    for (let i = 1; i <= numero + numero; i++) {
        if (i % 2 == 1) {
            repeticao = repeticao + `${fruta}`;

        }else{
            repeticao = repeticao + "*"
        }
    }

    resp.innerText = repeticao

    e.preventDefault()
})