const frm = document.querySelector("form")
const resp1 = document.getElementById("resposta1")
const resp2 = document.getElementById("resposta2")

const num = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    if (num.includes(numero)){

        alert("Número já adicionado!")

        frm.reset()

    } else {

        num.push(numero)

    }

    frm.reset()
    
    resp1.innerText = `Números: ${num.join(", ")}`

})

frm.btVerifica.addEventListener("click", () => {

    for ( let i = 0; i < num.length -1; i++){

        if (num[i] < num[i + 1]) {
            resp2.innerText = "Os Números estão ordenados"
        } else {
            resp2.innerText = "ERRO.. Os números não estão ordenados"
        }

    } 


})

