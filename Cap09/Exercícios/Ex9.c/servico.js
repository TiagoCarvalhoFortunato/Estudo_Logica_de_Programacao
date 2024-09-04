const frm = document.querySelector("form")
const resp1 = document.getElementById("resposta1")
const resp2 = document.getElementById("resposta2")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const servico = frm.inServico.value

    if (frm.inServico.value == "") {
        alert(`Por Favor digite o Serviço a ser Registrado`)
        return
    }    
    
    if (localStorage.getItem("contador")) {
        const numerico = localStorage.getItem("contador")
        let num = Number(numerico) + 1
        
    
        contador = localStorage.setItem("contador", num)
    }else {
        localStorage.setItem("contador", 1)
    }
    const numerico = localStorage.getItem("contador").split(";")
    let addServico = numerico[0]
    localStorage.setItem(`listaServico${addServico}`, servico)
     
    pendente()
    frm.inServico.value = ""
    frm.inServico.focus()
    
})


const pendente = () => {
    let pend = localStorage.length
    if(pend <= 0){
        alert(`Não há Serviços Registrado`)
        
        return
    } else {
        resp1.innerText = `Serviços Pendentes: ${pend - 1}`

    }

}

function executar() {
    
    if(localStorage.length - 2 < 0){
        alert(`Não há Serviços Registrado`)
        resp2.innerText = ""
        resp1.innerText = ""
        localStorage.clear()
    } else {
        let rep = localStorage.key(1)

        resp2.innerText = localStorage.getItem(rep)
        localStorage.removeItem(rep)
        pendente()
    }
    
}
window.addEventListener("load", pendente)



