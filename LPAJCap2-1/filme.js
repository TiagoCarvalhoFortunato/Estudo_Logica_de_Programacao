const inSesson =  document.getElementById("sessao")
const valor1 = document.getElementById("respsessao1")
const valor2 = document.getElementById("respsessao2")

inSesson.addEventListener("submit", (e) => {

    const titulo = inSesson.inTitulo.value
    const duracion = Number(inSesson.inMinutos.value)

    const horas = Math.floor(duracion / 60)
    const minutos = Math.floor(duracion % 60)

    valor1.innerText = titulo
    valor2.innerText = `${horas} horas e ${minutos} minutos. `

    e.preventDefault()

})

