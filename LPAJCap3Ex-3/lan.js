const paga = document.querySelector(".formLan")
const resultado = document.getElementById("pagar")

paga.addEventListener("submit", (e) => {

    const frm = paga.inMin.value 
    const cash = paga.inTime.value

    const final = (frm/15) * cash
    
    resultado.innerText = `Valor a Pagar R$: ${final.toFixed(2)} `

    e.preventDefault()

})