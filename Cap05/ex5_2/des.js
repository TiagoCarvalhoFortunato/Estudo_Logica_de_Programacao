const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    if (numero <= 0) {

        resp.innerText = ` Por favor digite um número acima de 1 `

        return
    }

    let resposta = `Entre ${numero} e 1: `
    
    for (let i = numero; i > 1; i--){

        resposta = `${resposta}${i}, `

    }

    resp.innerText = resposta + " 1"


})