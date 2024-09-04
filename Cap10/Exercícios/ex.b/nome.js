const frm = document.querySelector("form")
const bBody = document.getElementById("inBody")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    salveName()
    frm.inNome.value= ""
    frm.inNome.focus()
    
})

//funcao para criar as H3
const criacao = () =>{
    const nomeCompleto = localStorage.getItem("partesNome").split(" ")
    
        for(let i = 0; i < nomeCompleto.length; i++){
            const h3 = document.createElement("h3")
            h3.className = `cor${i + 1}`
            const texto = document.createTextNode(nomeCompleto[i])
            bBody.appendChild(h3)
            h3.appendChild(texto)
        }
}

const salveName = () => {

    const nomeC = frm.inNome.value 

    if(!localStorage.getItem("partesNome")){

        localStorage.setItem("partesNome", nomeC)
        criacao()
        
    }else {
        remover()
        localStorage.setItem("partesNome", nomeC)
        criacao()
        }
    }

    //funcao que remove as H3
const remover = () =>{

    const remove = document.querySelectorAll("h3")
    const nomeCompleto = localStorage.getItem("partesNome").split(" ")
    for(let i = 0; i < nomeCompleto.length; i++){
        bBody.removeChild(remove[i])
    }   
}


window.addEventListener("load", () => {
    if (localStorage.getItem("partesNome")){
        criacao()
    }else {
        return
    }
})

