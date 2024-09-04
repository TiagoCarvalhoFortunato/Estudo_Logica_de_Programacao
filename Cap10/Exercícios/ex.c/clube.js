const frm = document.querySelector("form")
const inBody = document.getElementById("inTimes")
const iTable = document.querySelector("table")

//função SUBMIT
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const clubes = frm.inClube.value

    if(localStorage.getItem("timesCl")) {
        const times = localStorage.getItem("timesCl") + ";" + clubes
        localStorage.setItem("timesCl", times)
    }else{
        localStorage.setItem("timesCl", clubes)
    }

    addClube()
    frm.inClube.value = ""
    frm.inClube.focus()

})

//Função para adicionar osclunes na pagina e em LocalStorage

const addClube = () => {
    
   if (localStorage.getItem("timesCl")){
    const clubes = frm.inClube.value

    const h5 = document.createElement("h5")
    const texto = document.createTextNode(clubes)
    h5.className = "timesAdd"
    h5.appendChild(texto)
    inBody.appendChild(h5)

   }else {
    const h5 = document.querySelectorAll("h5")
    inBody.removeChild(h5)
    return
   }

}

const tbl = () => {

    const newH5 = document.querySelectorAll("h5")
    let linhas

    for(let i = 0; i < newH5.length; i++){
        if(i % 2 == 0) {
            linhas = iTable.insertRow(-1)
            const col1 = linhas.insertCell(0)
            col1.textContent = newH5[i].innerText
        } else {
            const col2 = linhas.insertCell(1)
            col2.textContent = newH5[i].innerText
        }
    } 

}

//função para criar tabela 
frm.montarTabela.addEventListener("click", () =>{
    const newH5 = document.querySelectorAll("h5")

    if (newH5.length % 2 == 1 || newH5.length == 0) {
        alert("Não há times adicionados ou é necessário ter um número PAR de times")
        return
    }
    const h3 = document.createElement("h3")
    const texto = document.createTextNode("Tabelas de Jogos")
    h3.appendChild(texto)
    inBody.appendChild(h3) 

    tbl()
    
    montarTabela.disabled = true
})


//funçaõ de novos times
frm.newClube.addEventListener("click", ()=> {
    if(localStorage.getItem("timesCl")){
        localStorage.clear("timeCl")
        window.location.reload()
    }
    frm.inClube.focus()
})


//evento Load recuperando dados
window.addEventListener("load", () => {
    if(localStorage.getItem("timesCl")) {
        const timesLocal = localStorage.getItem('timesCl').split(";")
        for(let i = 0; i < timesLocal.length; i++){
            const h5 = document.createElement("h5")
            const texto = document.createTextNode(timesLocal[i])
            h5.className = "timesAdd"
            h5.appendChild(texto)
            inBody.appendChild(h5)
        }

        if (timesLocal.length % 2 == 1) {
            alert("Não há times adicionados ou é necessário ter um número PAR de times")
            return
        }

        const h3 = document.createElement("h3")
        const texto = document.createTextNode("Tabelas de Jogos")
        h3.appendChild(texto)
        inBody.appendChild(h3) 

        tbl()
        montarTabela.disabled = true
    }

})
