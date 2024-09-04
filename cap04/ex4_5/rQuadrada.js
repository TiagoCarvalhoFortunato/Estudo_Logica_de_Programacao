const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(frm.inNumero.value)
    const raiz = Math.sqrt(valor)

    if (Number.isInteger(raiz)) {

        resp.innerText = `A Raiz é: ${raiz}`

    } else {

        resp.innerText = `O Número ${valor} não contém uma raiz quadrada de número inteiro!`
        

    }

    


})