const formulario = document.querySelector(".resultadoCar")

const car = document.getElementById("inVeiculo")
const price = document.getElementById("inPreco")

const resp1 = document.getElementById("respcar1")
const resp2 = document.getElementById("respcar2")
const resp3 = document.getElementById("respcar3")


formulario.addEventListener("submit", (e) => {
    const veiculo = car.value
    const preco = Number(price.value)

    const entrada = preco * 0.50
    const parcela = entrada / 12

    resp1.innerText = `Promoção: ${veiculo} `
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2).replace(".", ",")} `
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2).replace(".", ",")}  `



    e.preventDefault()

}
)