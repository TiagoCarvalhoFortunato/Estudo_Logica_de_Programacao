const frm = document.querySelector("form")

const resp1 = document.querySelector("#notas100")
const resp2 = document.querySelector("#notas50")
const resp3 = document.querySelector("#notas10")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const valor = Number(frm.inSaque.value)


    if (valor % 10) {

        alert("Valor inválido para as notas disponíveis (R$ 100.00, R$ 50.00, R$ 10.00)")
        frm.inSaque.focus()
        return

    } 

    const notasCem = Math.floor(valor / 100)
    let resto = valor % 100

    const notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50

    const notasDez = Math.floor(resto / 10)

    if (notasCem > 0) {
        resp1.innerText = `Notas de R$ 100: ${notasCem}`
    }
    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
    }
    if (notasDez > 0) {
        resp3.innerText = `Notas de R$ 10: ${notasDez}`
    }

})