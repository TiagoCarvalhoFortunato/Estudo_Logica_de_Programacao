const prompt = require("prompt-sync")()

const vinhos = []

function titulo(texto) {

    console.log()
    console.log(texto)
    console.log("=".repeat(40))

}

// Program Principal
do {

    titulo("===< Cadastro de Vinhos >===")
    console.log("1. Inclusão de Vinhos")
    console.log("2. Listagem de Vinhos")
    console.log("3. Pesquisa por Tipo")
    console.log("4. Média e Destaques")
    console.log("5. Finalizar")
    const opcao = Number(prompt("Opção: "))

    if (opcao == 1) {
        incluir()
    }else if (opcao == 2) {
        listar()
    }else if ( opcao == 3) {
        pesquisar()
    }else if ( opcao == 4 ){
        calcularMedia()
    } else {break}

} while (true)

function incluir() {
    titulo("===> Inclusão de Vinhos <===")

    const marca = prompt("Marca...: ") //lê os dados do vinho
    const tipo = prompt("Tipo...: ")
    const preco = Number(prompt("Preço R$: "))
    vinhos.push({marca, tipo, preco})
    console.log("Ok! Vinho cadastrado com sucesso")

}

function listar() {
    titulo("===< Lista de Vinhos Cadastrados >===")
    console.log("Marca............... Tipo............... Preço R$:")

//percorre o vetor para exibir todos os vinhos
for (const vinho of vinhos) {

    console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ` +
                `${vinho.preco.toFixed(2).padStart(7)}`
)
}}

function pesquisar() {
    titulo("===< Pesquisa por Tipo de Vinho >===")

    const pesq = prompt("Tipo: ") // Lê o tipo de Vinho a pesquisar

    let contador = 0
    console.log("Marca............... Tipo............... Preço R$:")

    for (const vinho of vinhos) {
        if(vinho.tipo.toUpperCase().includes(pesq.toUpperCase())) {
            console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ` +
                `${vinho.preco.toFixed(2).padStart(7)}`)

            contador++ //se entrou no if, incrementa  o contador
        }
    }

    //Se percorreu todos os vinhos , contador continua == 0, significa que não há 
    if (contador == 0) {
        console.log(`Obs.: Não há Vinhos cadastrados do tipo " ${tipo} "`)

    }
}

function calcularMedia() {
    titulo("===< Média e Destaques do Cadastro de Vinhos >===")

    const num = vinhos.length //obter numeros de elementos no vetor
    if (num == 0) {
        console.log(`Obs.: Não há vinhos cadastrados`)
        return
    }

    let total = 0 //para acumular o total
    for (const vinho of vinhos) {

        total += vinho.preco
    }

    const media = total / num //calcula preco medio

    const vinho2 = [...vinhos] //cria uma cópia do vetor original
    vinho2.sort((a, b) => a.preco - b.preco ) //ordena por preco

    const menor = vinho2[0]
    const maior = vinho2[num - 1]

    console.log(`Preço Médio dos Vinhos R$: ${media.toFixed(2)}`)
    console.log(`Menor Valor R$: ${menor.preco.toFixed(2)} - ${menor.marca}`)
    console.log(`Maior Valor R$: ${maior.preco.toFixed(2)} - ${maior.marca}`)

    
}

