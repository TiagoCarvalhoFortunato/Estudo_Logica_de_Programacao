const prompt = require("prompt-sync")()

const centena = Number(prompt("Digite uma centena: "))

if (centena < 100 || centena >= 1000) {
    console.log(`Por favor, digite um número centena ( 100 / 999 )` )

    return
} else { 

    const num1 = Math.floor(centena / 100)
    const sobra = centena % 100
    const num2 = Math.floor(sobra / 10)
    const num3 = centena % 10


    console.log(`Invertido ${num3} ${num2} ${num3}`)
}
