const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.inResp.addEventListener("click", () => {

    let frase = frm.inFrase.value.toUpperCase()
    let inverso = ""

    if (frase.trimStart().length == 0) {

        alert("POR FAVOR DIGITE ALGO")
        return

    }

    for (let i = frase.length; i >= 0; i--) {

        inverso += frase.charAt(i)
    
    }

    if ( frase === inverso ) {

        resp.innerText = `${frase} é um Palíndromo!`

    } else {

        resp.innerText = `${frase} Não é um Palíndromo!`

    }


})

