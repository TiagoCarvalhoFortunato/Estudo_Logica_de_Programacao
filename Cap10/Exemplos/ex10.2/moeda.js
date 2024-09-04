const frm = document.querySelector("form")
const dvMoedas = document.querySelector("#divMoedas")

window.addEventListener("load", () => {
    //gera números aleatórios, entre 1 e 5, para cada moeda

    const num1_00 = Math.ceil(Math.random() * 5)
    const num0_50 = Math.ceil(Math.random() * 5)
    const num0_25 = Math.ceil(Math.random() * 5)
    const num0_10 = Math.ceil(Math.random() * 5)

    //define texto alternativo das imagens (acebilidade)

    const alt1_00 = "Moedas de um real"
    const alt0_50 = "Moedas de Conquenta Centavos"
    const alt0_25 = "Moedas de Vonte e Cinco Centavos"
    const alt0_10 = "Moedas de Dez Centavos"

    //chama o método criarMoedas passando os argumentos
    criarMoedas(num1_00, "1_00.jpg", alt1_00, "moeda1-00")
    criarMoedas(num0_50, "0_50.jpg", alt0_50, "moeda0-50")
    criarMoedas(num0_25, "0_25.jpg", alt0_25, "moeda0-25")
    criarMoedas(num0_10, "0_10.jpg", alt0_10, "moeda0-10")

})


const criarMoedas = (num, moeda, textoAlt, classe) => {

    for (let i = 1; i <= num; i++) {
        const novaMoeda = document.createElement("img")
        novaMoeda.src = "img/" + moeda
        novaMoeda.textAlt = textoAlt
        novaMoeda.className = classe
        dvMoedas.appendChild(novaMoeda) //herarquia DOM
    }
    const br = document.createElement("br")
    dvMoedas.appendChild(br)

}

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const soma = Number(frm.inSoma.value)
    const moedas = dvMoedas.querySelectorAll("img")
    let totalMoedas = 0

    for (const moeda of moedas) { 
        if (moeda.className == "moeda1-00") {
            totalMoedas += 1 // acumula 1 (para moedas de 1)
        }else if (moeda.className == "moeda0-50") {
            totalMoedas += 0.5 //acumula 0.50 ( para as moedas de 0.50)
        }else if (moeda.className == "moeda0-25") {
            totalMoedas += 0.25
        }else { totalMoedas += 0.10 }
    }

    const div = document.createElement("div")
    const h3 = document.createElement("h3")

    let mensagem

    if(soma == totalMoedas.toFixed(2)) {
        div.className == "alert alert-sucess"
        mensagem = "Parabéns você acertou!"
    }else {
        div.className = "alert alert-danger"
        mensagem = (`Ops... A resposta correta é ${totalMoedas.toFixed(2)}`)
    }
    const texto = document.createTextNode(mensagem)
    h3.appendChild(texto)
    div.appendChild(h3)
    dvMoedas.appendChild(div)

    frm.submit.disable = true
 

})

frm.addEventListener("reset", () => {
    window.location.reload()
})