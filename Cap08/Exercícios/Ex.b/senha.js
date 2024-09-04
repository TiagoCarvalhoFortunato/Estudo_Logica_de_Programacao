const frm = document.querySelector("form")
const resp = document.querySelector("h3")

function validarNome() {
    const nome = frm.inNome.value

    if(!nome.includes(" ")) {
        alert("Informe o  Nome Completo")
        return nome
    } 

}

function obterSobrenome() {
    const nome = frm.inNome.value
    const sobrenome = nome.lastIndexOf(" ")
    const sobNome = nome.substr(sobrenome)

    return sobNome

}

function contarVogais() {
    const nome = frm.inNome.value

    contador = 0

    for(vogais of nome){

        if(vogais == "a" || vogais == "e" || vogais == "i" || vogais == "o" || vogais == "u")
            contador++

    }

    return contador  
}


frm.addEventListener("submit", (e) => {
    e.preventDefault()


    if(validarNome()) {
        frm.inNome.value = ""
        frm.inNome.focus()
        return
    } 


    const sobrenome = obterSobrenome()
    const vogais = contarVogais()
    const vogal2 = vogais < 10 ? "0" + vogais : vogais

    resp.innerText = `Senha Inicial: ${sobrenome.toLowerCase()}${vogal2}`


    }

)
