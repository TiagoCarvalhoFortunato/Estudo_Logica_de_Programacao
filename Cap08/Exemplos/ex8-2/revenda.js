const frm = document.querySelector("form")
const resposta1 = document.getElementById("resp1")
const resposta2 = document.getElementById("resp2")
const resposta3 = document.getElementById("resp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const modelo = frm.inModelo.value
    const ano = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)
    const classificacao = classificarVeiculo(ano) //chama função e atribui

    const entrada = calcularEntrada(preco, classificacao) //..retorno às variáveis
    const parcela = (preco - entrada) / 10 // usa retorno da função para cálculo

    resposta1.innerText = `${modelo} - ${classificacao}`
    resposta2.innerText = `Entrada R$: ${entrada.toFixed(2)}`
    resposta3.innerText = `+10X de R$: ${parcela.toFixed(2)}`

})

// Funçao que recebe o ano do veículo como parâmetro
const classificarVeiculo = (ano) => {

    const anoAtual = new Date().getFullYear()
    let classif 
    if (ano == anoAtual) {

        classif = "Novo"

    } else if( ano == anoAtual - 1 || ano == anoAtual - 2 ) {

        classif = "SemiNovo"

    } else {

        classif = "Usado"
        
    }
    return classif //retorna a classificação

}

//função recebe valor e status do veículo como parâmetro

const calcularEntrada = (entrada, status) => 
   status == "Novo" ? entrada * 0.5 : entrada * 0.3

 