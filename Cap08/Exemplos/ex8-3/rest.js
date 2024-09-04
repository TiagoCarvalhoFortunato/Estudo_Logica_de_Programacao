
const calcularMedia = (...notas) => {

    const num = notas.length
    if ( num == 0 ) {
        console.log("Informe, no mínimo, uma nota")
        return
    }

    let soma = 0 //vai acumular a soma das notas
    for(nota of notas) {

        soma += nota //soma o valor dos argumentos

    }
    const media = soma / num
    console.log(`Média: ${media.toFixed(1)} `)

}


calcularMedia(6, 7, 8)
calcularMedia(2, 10)
calcularMedia()
