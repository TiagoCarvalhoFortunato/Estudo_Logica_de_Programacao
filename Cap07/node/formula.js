const prompt = require("prompt-sync")() //pacote de entrada de dados
const formula = prompt("Fórmula: ")
let abre = 0
let fecha = 0

for(const simbolo of formula) {

    if(simbolo == "(") {

        abre++

    }else if (simbolo == ")") {
        fecha++
    } 
    if (fecha > abre) {

        break

    }
}

if (abre == fecha) {

    console.log(`OK! Fórmula correta (em relação aos parênteses)`)
} else {

    console.log(`Erro... Fórmula incorreta`)

}