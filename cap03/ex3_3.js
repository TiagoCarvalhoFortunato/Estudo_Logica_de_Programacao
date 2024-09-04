const prompt = require("prompt-sync")()

const salario = Number(prompt("Valor do Salário: "))
const tempo = Number(prompt("Tempo de trabalho em anos: "))

const quadrienio = Math.floor(tempo / 4)
const salario_total = salario + (salario * quadrienio * 0.01)

console.log(`O número de Quadriênio é: ${quadrienio}`)
console.log(`Seu salário total será R$: ${salario_total.toFixed(2)}`)