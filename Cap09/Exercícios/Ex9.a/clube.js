const inRadios = document.querySelectorAll("input")


const trocarClube = () => {
    const clubes = ["Brasil", "SaoPaulo", "Palmeiras"] //vetor de Clubes

    let selecao

    for(let i = 0; i <= inRadios.length; i++ ){
        if (inRadios[i].checked){
            selecao = i
            break
        } 
    }

    if (selecao <= 2) {
        divTitulo.className = `row cores-${clubes[selecao]}`
        imgClube.src = `imagem/${clubes[selecao].toLowerCase()}.png`
        imgClube.className = "img-fluid"
        imgClube.alt = `Símbolo od ${clubes[selecao]}`
        localStorage.setItem("clube", clubes[selecao]) // salva o nome do clube
    }else {
        divTitulo.className = "row"
        imgClube.className = "d-none"
        imgClube.alt = ""

        localStorage.removeItem("clube") //remove variavel item
    }

}

//percorre os elementos para associar function ao evento change
for(const inRadio of inRadios) {

    inRadio.addEventListener("change", trocarClube)
}


const verificarClube = () => {
    if(localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube")

        if (clube == "Brasil") {
            inRadios[0].checked = true
        } else if (clube == "SaoPaulo") {
            inRadios[1].checked = true
    } else {
        inRadios[2].checked = true
        }
        trocarClube() //chama a função
    }   
}

//ao carregar a pagina, verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube)

