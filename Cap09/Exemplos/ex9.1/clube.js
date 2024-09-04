const frm = document.querySelector("form")
const imClube = document.getElementById("imgClube")
const divTitulo = document.getElementById("divTitulo")

const trocarClube = () => {

    let clube //variavel que ira receber o nome do clube

    if (frm.rbBrasil.checked) {
        clube = "Brasil"
    }  else if (frm.rbSaoPaulo.checked) {
        clube = "SaoPaulo"
    } else{
        clube = "Palmeiras"
    } 

    //define as classes de dvTitulo: row e cores do clube
    divTitulo.className = `row cores-${clube}`

    //modifca a imagem de acoardo com as seleção do time
    imClube.src = `imagem/${clube.toLowerCase()}.png` 
    imClube.className = "img-fluid" //muda o estilo para exibir a imagem
    imClube.alt = `símbolo do ${clube}` //modifica atributo alt

    localStorage.setItem("clube", clube) //salva no navegador a escolha do cliente

}

//associa ao evento change de cada botão do fomr a função trocaClube
frm.rbBrasil.addEventListener("change", trocarClube)
frm.rbSaoPaulo.addEventListener("change", trocarClube)
frm.rbPalmeiras.addEventListener("change", trocarClube)

const verificarClube = () => {
    if(localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube")

        if (clube == "Brasil") {
            frm.rbBrasil.checked = true
        } else if (clube == "SaoPaulo") {
            frm.rbSaoPaulo.checked = true
    } else {
        frm.rbPalmeiras.checked = true
        }
        trocarClube() //chama a função
    }   
}

//ao carregar a pagina, verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube)