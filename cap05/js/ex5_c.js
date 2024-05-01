/* 
Elaborar um programa que leia um número e verifique se ele é ou não perfeito. Um número dito perfeito é aquele
que é igual à soma dos seus divisores inteiros (exceto o próprio número) O programa deve exibir os divisores
do npumero e a sioma deles
*/

// const form = document.getElementById("form")
// const resp = document.getElementById("resp")
// const resp2 = document.getElementById("resp2")

// form.addEventListener("submit", (e) => {
//     const numeroP = Number(form.numero.value)

//     let resposta = ""
//     let contador = 0;
//     let acumulador = 0;

//     for (let i = 1; i <= (numeroP / 2); i++) {

//         if(!(numeroP % i)){
//             resposta += `${i}` + ","
//         }

//         resp.innerText = `Divisores do ${numeroP}: ${resposta} (Soma:${numeroP})`
//         resp2.innerText = `${numeroP} é um Número Perfeito`
        
//     }




//     e.preventDefault()
// })


const form = document.getElementById("form");
const resp = document.getElementById("resp");
const resp2 = document.getElementById("resp2");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const numeroP = Number(form.numero.value);
    let divisores = [];
    let somaDivisores = 0;

    for (let i = 1; i < numeroP; i++) {
        if (numeroP % i === 0) {
            divisores.push(i);
            somaDivisores += i;
        }
    }

    if (somaDivisores === numeroP) {
        resp2.innerText = `${numeroP} é um número perfeito`;
    } else {
        resp2.innerText = `${numeroP} não é um número perfeito`;
    }

    resp.innerText = `Divisores de ${numeroP}: ${divisores.join(", ")}. Soma: ${somaDivisores}`;
});
