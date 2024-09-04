const frm = document.querySelector("form")
const resp1 = document.getElementById("resposta1")
const resp2 = document.getElementById("resposta2")

frm.inSim.addEventListener("click", () => {

    frm.inConvenio.classList = "exibe"

})

frm.inNao.addEventListener("click", () => {

    frm.inConvenio.classList = "oculto"
    frm.inConvenio.value = ""

})

function calcularDesconto() {

    const preco = Number(frm.inValor.value)

    const plano = frm.inConvenio.value
    const desc = plano == "amigo" ? preco - (preco * 0.20) : plano == "saude" ? preco - (preco * 0.50) : preco - (preco * 0.10)

    return desc
} 

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const preco = Number(frm.inValor.value)

    const desconto = preco - calcularDesconto() 
    const pagar = calcularDesconto()

    resp1.innerText = `Desconto R$: ${desconto.toFixed(2)}`
    resp2.innerText = `A Pagar R$: ${pagar.toFixed(2)}` 


})

   


