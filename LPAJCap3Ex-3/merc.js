const frm = document.getElementById("frmMer")
const resuMerc = document.getElementById("resMerc")
const resuMerc1 = document.getElementById("resMerc1")

frm.addEventListener("submit", (e) => {

    const produto = frm.inProd.value
    const valor = frm.price.value
    const promo = valor/2
    const resultado = (valor * 2) + promo


    resuMerc1.innerText = ` ${produto.toUpperCase()} - Promoção Leve 3 por R$: ${resultado.toFixed(2)}`

    resuMerc.innerText = `O 3° produto custa apenas R$: ${promo.toFixed(2)} `



    e.preventDefault()
})