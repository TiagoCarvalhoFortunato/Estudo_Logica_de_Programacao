const frm = document.querySelector("form")

const resp1 = document.getElementById("resposta1")
const resp2 = document.querySelector("#resposta2")

let resposta = "" // string com a resposta a ser exibida
let numContas = 0 // inicializa contador...
let valTotal = 0 // e acumulador

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const descricao = frm.inDescricao.value
    const valor = Number(frm.inPagar.value)

    numContas++  // adiciona valor ao contador
    valTotal = valTotal + valor
    resposta = resposta + descricao.charAt(0).toUpperCase() + descricao.slice(1) + " - R$: " + valor.toFixed(2) + "\n"

    resp1.innerText = `${resposta}------------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`


    frm.inDescricao.value = ""
    frm.inPagar.value = ""
    frm.inDescricao.focus()
    


})
