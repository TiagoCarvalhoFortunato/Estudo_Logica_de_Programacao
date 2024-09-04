const frm = document.querySelector("form")
const resp = document.querySelector("pre")

let resposta = ""

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const anos = Number(frm.inAno.value)
    let chinchila = Number(frm.inChi.value) 

  
    for (let i = 1; i <= anos; i++) {

        resposta = resposta + i +"º Ano: "  +  chinchila + " Chinchilas \n"
        chinchila = chinchila * 3

    }

    resp.innerText = resposta 

})