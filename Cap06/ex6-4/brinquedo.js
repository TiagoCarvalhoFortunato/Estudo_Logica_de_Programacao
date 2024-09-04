const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const crianca = []

frm.addEventListener("submit", (e) => {
    e.preventDefault() 

    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)

    crianca.push({nome, idade})

    frm.reset()
    frm.inNome.focus()
    frm.btListar.dispatchEvent(new Event("click"))

})

frm.btListar.addEventListener("click", () => {
    if( crianca == 0 ) {
        alert ("Não há crianças cadastrada")
        return
    }

    let lista = ""

    for (const criancas of crianca) {

        const {nome, idade} = criancas
        lista += nome + " - " + idade + " anos\n"
    }

    resp.innerText = lista


})

frm.btResumir.addEventListener("click", () => {
    if( crianca == 0 ) {
        alert ("Não há crianças na lista")
        return
    }
    const copia = [...crianca] // cria uma copia do vetor crianca
    copia.sort((a, b) => a.idade - b.idade ) //ordena pela idade
    let resumo = "" //para concatenar saída

    let aux = copia[0].idade //menor idade do vetor ordenado   
    let nomes = [] //para iserir nomes de cada idade
    for (const criancas of copia ) {
        const {nome, idade} = criancas
        if ( idade == aux) {
            nomes.push(nome)
        } else {

            resumo += aux + "ano(s): " + nomes.length + " criança(s) - "
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
            resumo += "(" + nomes.join(", ") + ")\n\n"
            aux = idade //obtem a nova idade na ordem
            nomes = [] // limpa o vetor dos nomes
            nomes.push(nome) // adiciona o primeiro da nova idade


        }

    }
    // adiciona a ultima criança
    resumo += aux + " ano(s): " + nomes.length + " criança(s) -"
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
    resumo += "(" + nomes.join(", ") + ")\n\n"
    resp.innerText = resumo

})