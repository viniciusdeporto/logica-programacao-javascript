const calcularMedia = (...notas) => {
    const num = notas.length
    if(num == 0){
        console.log("Informe, no minimo, uma nota")
        return
    }

    let soma
    for(const nota of notas){
        soma += nota
    }

    const media = soma / num
    console.log(`Média: ${media.toFixed(1)}`)
}

let arr = [2, 5, 6, 7, 8]

calcularMedia(...arr)
