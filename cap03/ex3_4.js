const prompt = require("prompt-sync")()

const racao = Number(prompt("Peso Raçao(Kg): "))
const consumo = Number(prompt("Consumo diário(gr): "))

const duracao = Math.floor((racao * 1000) / consumo)
const sobra = (racao * 1000) % consumo

console.log(`A duração será ${duracao} dias`)
console.log(`E a sobra será: ${sobra}gr`)