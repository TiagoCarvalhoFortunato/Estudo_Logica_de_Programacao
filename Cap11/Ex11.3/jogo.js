const frm = document.querySelector("form")
const respPalavra = document.getElementById("outPalavra")
const respErros = document.getElementById("outErros")
const respDica = document.getElementById("outDicas")
const respChance = document.getElementById("outChances")
const respMensagemFinal = document.getElementById("outMensagemFinal")
const imgStatus = document.querySelector("img")

let palavraSorteada
let dicaSorteada

window.addEventListener("load", () => {

    if(!localStorage.getItem("jogoPalavra")){
        alert("Cadastre palavras para jogar")
        frm.inLetra.disabled = true
        frm.btJogar.disabled = true
        frm.btVerDica.disabled = true
    }

    const palavras = localStorage.getItem("jogoPalavra").split(";")
    const dicas = localStorage.getItem("jogoDica").split(";")

    const tam = palavras.length

    const numAleatorio = Math.floor(Math.random() * tam)

    palavraSorteada = palavras[numAleatorio].toUpperCase()
    dicaSorteada = dicas[numAleatorio].toUpperCase()
    let novaPalavra = ""

    for( const letra of palavraSorteada) {
        if (letra == palavraSorteada.charAt(0)) {
            novaPalavra += palavraSorteada.charAt(0)
        }else {
            novaPalavra += "_"
        }
    }

    respPalavra.innerText = novaPalavra
})

frm.btVerDica.addEventListener("click", () => {

    if(respErros.innerText.includes("*")) {
        alert("Você já solicitou a dica...")
        frm.inLetra.focus()
        return
    }

    respDica.innerText = " * " + dicaSorteada
    respErros.innerText += "*"

    const chances = Number(respChance.innerText) - 1 // diminui 1 em chances
    respChance.innerText = chances

    trocarStatus(chances)

    verificarFim()

    frm.inLetra.focus()
})

const trocarStatus = (num) => {
    if (num > 0) imgStatus.src = `img/status${num}.jpg`
}

frm.addEventListener("submit", e => {
    e.preventDefault()

    const letra = frm.inLetra.value.toUpperCase() //obtem o valor do campo inLetra

    let erros = respErros.innerText
    let palavras = respPalavra.innerText

    if(erros.includes(letra) || palavras.includes(letra)){
        alert("Você já apostou esta letra")
        frm.inLetra.focus()
        return
    }

    //se a Palavra consta em palavraSorteda
    if(palavraSorteada.includes(letra)) {
        let novaPalavra = "" //para compor novaPalavra

        //for para montar palavra a ser exibida
        for(let i = 0; i < palavraSorteada.length; i++) {
            if (palavraSorteada.charAt(i) == letra) {
                novaPalavra += letra
            }else {
                novaPalavra += palavras.charAt(i)
            }
        }
        respPalavra.innerText = novaPalavra
    }else {
        respErros.innerText += letra //acrescenta letra a erros
        const chances = Number(respChance.innerText) - 1 //diminui o número de chances
        respChance.innerText = chances // exibe o novo numero de chances

        trocarStatus(chances) //troca imagem
    }

    verificarFim() //verifica se ganhou ou perdeu

    frm.inLetra.value = ""
    frm.inLetra.focus()
})

const verificarFim = () => {
    const chances = Number(respChance.innerText)

    if(chances == 0) {
        respMensagemFinal.className = "display-3 text-danger"
        respMensagemFinal.innerText = `Ah... é ${palavraSorteada}. Você Perdeu!`
        concluirJogo()
    }else if (respPalavra.innerText == palavraSorteada) {
        respMensagemFinal.className = "display-3 text-primary"
        respMensagemFinal.innerText = "Parabéns!! Você Ganhou!"
        trocarStatus(4) //exibe a figura do Rostinho feliz
        concluirJogo()
    }
}

// modifica o texto da dica e desabilita os botões de jogar
const concluirJogo = () => {
    respDica.innerText = "* Clique no botão 'Iniciar Jogo' para jogar novamente"
    frm.inLetra.disabled = true
    frm.btJogar.disabled = true
    frm.btVerDica.disabled = true
}