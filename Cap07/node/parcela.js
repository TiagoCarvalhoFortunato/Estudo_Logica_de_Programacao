const prompt = require("prompt-sync")()
const parcelas = Number(prompt("Quantas parcelas: "))
const data = new Date()
for (let i = 1; i <= parcelas; i++) {

    data.setMonth(data.getMonth() + 1)
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()

    const diaZero = dia < 10 ? "0" + dia : dia
    const mesZero = mes < 10 ? "0" + mes : mes
    const dataClass = i <10 ? " " + i : i

    console.log(`${dataClass}º Parcela: ${diaZero}/${mesZero}/${ano}`)


}