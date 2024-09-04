const frm = document.querySelector("form")
const resp01 = document.getElementById("resp1")
const resp02 = document.getElementById("resp2")

frm.btCalcular.addEventListener("click", () => {

    const data = new Date(frm.inData.value)

    const limite = data.setDate(data.getDate() + 90) 
    const tempo = new Date(limite)

    const diaL = tempo.getDate() + 1
    const mesL = tempo.getMonth() + 1
    const anoL = tempo.getFullYear()

    const diaZ = diaL < 10 ? "0" + diaL : diaL
    const mesZ = mesL < 10 ? "0" + mesL : mesL

    const multa = Number(frm.inMulta.value)
    const desconto = multa - (multa * 0.20) 


    resp01.innerText = `Data Limite para Pagto com Desconto: ${diaZ} / ${mesZ} / ${anoL}`
    resp02.innerText = `Valor com Desconto R$: ${desconto.toFixed(2)}`

})






//90 dias = 90 * 24 * 60 * 60 * 1000 