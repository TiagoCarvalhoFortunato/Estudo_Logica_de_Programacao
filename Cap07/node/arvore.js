const prompt = require("prompt-sync")()
const altura = Number(prompt("Altura da Árvore: "))

console.log()

for(let i = 1; i<=altura ; i++) {

    const espaco = 30 + (altura - i) // calcula espaco do inicio
    console.log(" ".repeat(espaco) + "*".repeat(i*2)) 

}