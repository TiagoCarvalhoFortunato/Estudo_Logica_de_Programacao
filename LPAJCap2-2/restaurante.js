const frm = document.getElementById("frmRestaurante")

const resp = document.getElementById("respRestaurante")


frm.addEventListener("submit", (e) => {

    const price = Number(frm.inQuilo.value)
    const cons = Number(frm.inConsumo.value)
    

    const valor = (price / 1000) * cons
    resp.innerText = ` Valor a pagar R$: ${valor.toFixed(2)} `

    e.preventDefault()

})