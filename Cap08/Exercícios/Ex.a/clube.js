const frm = document.querySelector("form")
const resp = document.querySelector("pre")

function retornarTracos() {
    const nome = frm.inNome.value
    
    let resposta = ""

    for (letra of nome) {

        if (letra == " ") {
            resposta += " "
 
        } else {
            resposta += "."
        }
    }

    return resposta
    
}

function categorizarAluno() {
    const idade = Number(frm.inIdade.value)
    let categoria 

    if ( idade > 18) {
        categoria = "Adulto"
    } else if (idade <= 12) {
        categoria = "Infantil"
    } else {
        categoria = "Juvenil"
    }

    return categoria

}





frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const tracos = retornarTracos()
    const categ = categorizarAluno()


    resp.innerText = `${nome}\n${tracos}\nCategoria: ${categ}`

    frm.inNome.focus()
    frm.inNome.value = ""
    frm.inIdade.value = ""


})