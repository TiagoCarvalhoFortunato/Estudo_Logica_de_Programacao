const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.getElementById("outDica")


const erros = [] //vetor de escopo global com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1 //num aleatorio entre 1 e 100
const CHANCES = 10 // constante com o número máximo de chances


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    if (numero == sorteado) {
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`

        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"

    } else {
        if (erros.includes(numero)) {
            alert(`Você já apostou o número ${numero}. Tente outro...`)
        }else {
            erros.push(numero)  // adiciona número ao vetor
            const numErros = erros.length // obtem tamanho do vetor
            const numChances = CHANCES - numErros //calcula nº de erros
            //exibe o número de erros, conteúdo do vetor e nº de chances
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            if(numChances == 0 ) {
                alert("Suas Chances acabaram...")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDica.innerText = `GAME OVER!! Número Sorteado: ${sorteado}`

            }else {
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Tente um número ${dica} que ${numero}`
            }
        }
    }

    frm.inNumero.value = "" // Limpa o campo de entrada
    frm.inNumero.focus() // Posiciona o cursor neste campo



})

frm.btNovo.addEventListener("click", () => {
    location.reload()
})