const frm = document.querySelector("form")
const tbFilmes = document.querySelector("table")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const titulo = frm.inTitulo.value
    const genero = frm.inGenero.value

    inserirLinha(titulo, genero) //chama a fuction que insere filmes na tabela
    gravarFilme(titulo, genero) //para gravar dados no localStorage

    frm.reset()
    frm.inTitulo.focus()
})

inserirLinha = (titulo, genero) => {
    const linha = tbFilmes.insertRow(-1) //add uma linha na tabela

    const col1 = linha.insertCell(0) //cria colunas na linha inserida
    const col2 = linha.insertCell(1)
    const col3 = linha.insertCell(2)

    col1.innerText = titulo
    col2.innerText = genero
    col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>"
}

const gravarFilme = (titulo, genero) => {

    if(localStorage.getItem("filmesTitulo")) {

        const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo
        const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero
        localStorage.setItem("filmesTitulo", filmesTitulo) //gravar dados
        localStorage.setItem("filmesGenero", filmesGenero) // em localStorage
    }else {
        localStorage.setItem("filmesTitulo", titulo) //gravar dados
        localStorage.setItem("filmesGenero", genero) // em localStorage
    }
}

window.addEventListener("load", () => {
    if(localStorage.getItem("filmesTitulo")) {
        const titulos = localStorage.getItem("filmesTitulo").split(";")
        const generos = localStorage.getItem("filmesGenero").split(";")

        for(let i = 0;i < titulos.length; i++) {
            inserirLinha(titulos[i], generos[i])
        }
    }
})

tbFilmes.addEventListener("click", (e) => {

    if(e.target.classList.contains("exclui")) {
        const titulo = e.target.parentElement.parentElement.children[0].innerText

        if(confirm(`Confirma Exclusão do Filme "${titulo}`)) {
            e.target.parentElement.parentElement.remove()

            localStorage.removeItem("filmesTitulo") //exclui filmes salvos
            localStorage.removeItem("filmesGenero") //em localStorage
        }

        //salva novamente (se existir), acessando o conteúdo da tabela
        for (let i = 1;i < tbFilmes.rows.length; i++) {

            const auxTitulo = tbFilmes.rows[i].cells[0].innerText
            const auxGenero = tbFilmes.rows[i].cells[1].innerText
            gravarFilme(auxTitulo, auxGenero) //chama gravarFilme com daods da tabela

        }
    }
})


