const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const times = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const clubes = frm.inClube.value
    times.push(clubes)

    frm.reset()
    frm.inClube.focus()
    
    frm.btListar.dispatchEvent(new Event("click"))

})

frm.btListar.addEventListener("click", () => {

    if ( times.length == 0) {

        alert("Não há times registrado!")
        return

    }

    let lista = ""

    times.forEach((clubes, i) =>{

        lista += `${i + 1}º - ${clubes}\n`

    })    

    resp.innerText = lista

})

frm.btTabela.addEventListener("click", () => {

    if ( times.length % 2 == 1 ) {
        alert(" Adicione mais um Time !")
        return
    }


    let tabela = ""
    for (let i = 0; i < times.length / 2; i++) {

        tabela += `${times[i]} VS ${times[times.length - 1 - i]}\n`
 
    }

    resp.innerText = tabela
})

const mata = []

frm.btSorteio.addEventListener("click", ()=> {

    if ( times.length < 8 || times.length > 8) {
        alert("É Necessário/Permitido 08 clubes para o mata-mata")
    }

    while (mata.length < times.length) {

        let sorteio = Math.floor(Math.random() * times.length)

        if ( mata.includes(sorteio)) {

            continue

        } else {

            mata.push(sorteio)

        }

    }

    let tabela = ""
    for (let i = 0; i < times.length / 2 ; i++) {

        tabela += `${times[mata[i]]} VS ${times[mata[times.length - 1 - i]]}\n`
 
    }

    resp.innerText = `${tabela}\n ${mata}`


})