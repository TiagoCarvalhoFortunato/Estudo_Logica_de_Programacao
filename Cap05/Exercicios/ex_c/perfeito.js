const frm = document.querySelector("form")
const resp1 = document.getElementById("res1")
const resp2 = document.querySelector("#res2")

resposta = ""
soma = 0

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    for (i = 2; i < numero; i++) {

        if ( numero % i == 0 ){

            soma = soma + i

            resposta = resposta+ ", " + i

        }

    }

    resp1.innerText = `Divisores do ${numero}: 1${resposta} (Soma: ${soma + 1})`

    if (soma + 1 == numero) {

        resp2.innerText = `${numero} É um número perfeito!`
        
    } else {
        resp2.innerText = `${numero} Não é um número perfeito!`
    }
    
    resposta = ""
    soma = 0
    frm.inNumero.value = ""
    frm.inNumero.focus()

    

})