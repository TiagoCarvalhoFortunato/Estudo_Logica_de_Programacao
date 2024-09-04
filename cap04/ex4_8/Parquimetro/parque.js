const fmr = document.querySelector("form")
const resp = document.getElementById("resp1")
const resp0 = document.getElementById("resp2")


fmr.addEventListener("submit", (e) => {
    
    e.preventDefault()

    const moeda = Number(fmr.inMoeda.value)

    if (moeda < 1) {

        resp.innerText = `Valor Insuficiente`
        return
        
    }

   if (moeda >= 1 && moeda < 1.75) {

    let troco = moeda - 1.00

    resp.innerText = `Tempo: 30 min`
    resp0.innerText = `Troco R$: ${troco.toFixed(2)}`

   }else if (moeda >= 1.75 && moeda < 3.00) {

    let troco = moeda - 1.75

    resp.innerText = `Tempo: 60 min`
    resp0.innerText = `Troco R$: ${troco.toFixed(2)}`


   } else {

    let troco = moeda - 3.00

    resp.innerText = `Tempo: 120 min`
    resp0.innerText = `Troco R$: ${troco.toFixed(2)}`

   }


})

