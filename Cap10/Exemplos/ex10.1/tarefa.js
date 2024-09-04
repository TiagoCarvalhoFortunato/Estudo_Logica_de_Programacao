const frm = document.querySelector("form")
const dvQuadro = document.getElementById("divQuadro")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const tarefa = frm.inTarefa.value

    const h5 = document.createElement("h5") //cria um documento html h5    
    const texto = document.createTextNode(tarefa)   // cria um texto
    h5.appendChild(texto)   // define que o texto será ficlho de h5
    dvQuadro.appendChild(h5) //e que h5 será filho de divQuadro

    frm.inTarefa.value = ""
    frm.inTarefa.focus()

})

// Botão de Selecionar

frm.btSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")

    if (tarefas.length == 0) {
        alert(`Não há tarefas para selecionar`)
        return
    }

    let aux = -1 //variável auxiliar para indicar linha selecionada

    for ( let i = 0; i < tarefas.length; i++) {
        if(tarefas[i].className == "tarefa-selecionada"){
            tarefas[i].className = "tarefa-normal"
            aux = i//muda o valor da auxiliar
            break //sai da repetição
        }  
    }

    if(aux == tarefas.length - 1){
        aux = -1
    }

    tarefas[aux + 1].className = "tarefa-selecionada" // muda o estilo da própria linha

})

// Botão de Retirar

frm.btRetirar.addEventListener("click", () => {
    const tarefas =document.querySelectorAll("h5") // obtém tagas h5 da página

    let aux = -1

    tarefas.forEach((tarefa, i) => {

        if(tarefa.className == "tarefa-selecionada") {
            aux = i //muda o valor da variável selecionada
                }
    })

    if(aux == -1) {
        alert("Selecione uma tarefa para removê-la...")
        return
    }

    if(confirm(`Confirma Exclusão de "${tarefas[aux].innerText}"?`)) {
        dvQuadro.removeChild(tarefas[aux]) //remove um dos filhos de divQuadro
    }

})

// Botão de Gravar

frm.btGravar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")

    if (tarefas.length == 0) {
        alert("Não há tarefas para serem salvas")
        return
    }

    let dados = "" // irá acumular os dados a serem salvos
    tarefas.forEach(tarefa => {
        dados += tarefa.innerHTML + ";" //acumula conteúdo de cada h5
    })

    //gravar os dados no localStorage, removendo o último ";"
    localStorage.setItem("tarefasDia", dados.slice(0, -1))

    //confere se os dados foram salvos em localStorage
    if(localStorage.getItem("tarefasDias")){
        alert("Ok! Tarefas Salvas")
    }

})

//Load ecarregamento dos document salvos em localStorage

window.addEventListener("load", () => {
    if(localStorage.getItem("tarefasDia")) {

        const dados = localStorage.getItem("tarefasDia").split(";")

        dados.forEach(dado => {
            const h5 = document.createElement("h5") //cria um documento html h5    
            const texto = document.createTextNode(dado)   // cria um texto
            h5.appendChild(texto)   // define que o texto será ficlho de h5
            dvQuadro.appendChild(h5) //e que h5 será filho de divQuadro
        })

    }
})