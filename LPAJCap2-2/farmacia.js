const frm1 = document.getElementById("frmFarmacia")

const resp1 = document.getElementById("respFa")
const resp2 = document.getElementById("respF")



frm1.addEventListener("submit", (e) => {

    const nameR = frm1.inRemedio.value
    const price = Number(frm1.priceR.value)

    const promo = Math.floor(price) + Math.floor(price)

    resp1.innerText = ` Promoção de ${nameR} `
    resp2.innerText = ` LEVE 2 por apenas R$: ${promo.toFixed(2)}`


    e.preventDefault()

})