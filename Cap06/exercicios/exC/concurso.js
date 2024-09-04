const notaMin = prompt("Valor da nota Mínima para Aprovar é: ")

const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const lista = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const candidato = frm.inNome.value
    const acertos = Number(frm.inAcertos.value)

    lista.push({ candidato, acertos })

    frm.inNome.focus()
    frm.reset()

    frm.btListar.dispatchEvent(new Event("click"))

})



frm.btListar.addEventListener("click", () => {

    if (lista.length == 0) {

        alert("Não há Candidato Listado !!")
        return

    }

    /*const candidatos = lista.reduce((acumulador, listas) => 
        acumulador + listas.candidato + " - " + listas.acertos + " Acertos.\n" )

    resp.innerText = `${candidatos}`*/

   let listagem = ""

    for (let i = 0; i < lista.length; i++){

        listagem += lista[i].candidato + " - " + lista[i].acertos + " acertos!\n"

    }

    frm.inNome.focus()
    frm.reset()

    resp.innerText = listagem

})

frm.btAprovados.addEventListener("click", () => {

    if (lista.length == 0 ) {
         alert ("Não tem Candidato listado")

         return

    }

    const copia = [...lista] //criei uma copia do vetor
    copia.sort((a, b) => a.acertos - b.acertos).reverse() //organizei essa copia em decrescente

    let aprovados = copia.filter(acc => acc.acertos >= notaMin)

    let listagem = ""

    for (const acc of aprovados){

        listagem += acc.candidato + " - " + acc.acertos + " acertos!\n"

    }

    frm.inNome.focus()
    frm.reset()

    resp.innerText = `CANDIDATOS APROVADOS\n${"-".repeat(40)}\n\n${listagem}`



})