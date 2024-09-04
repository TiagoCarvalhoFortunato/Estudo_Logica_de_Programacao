const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value.trim()

    if ( !nome.includes(" ") ) {
        alert(`Informe o Nome Completo !`)
        return

    }

    //const priEspaco = nome.indexOf(" ")
    //const ultEspaco = nome.lastIndexOf(" ")

    const cracha = nome.substr(0, nome.indexOf(" ")) + nome.substr(nome.lastIndexOf(" "))

    resp.innerText = `Crachá: ${cracha}`

})