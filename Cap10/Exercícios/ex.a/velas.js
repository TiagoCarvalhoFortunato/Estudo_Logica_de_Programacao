const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const idade = Number(frm.inIdade.value)
    localStorage.setItem("numIdade", idade) 
    criarVelas()
    frm.inIdade.value = ""
})

const criarVelas = () => {
    if (!localStorage.getItem("numIdade")){
        return
    }else {

        const deIdade = localStorage.getItem("numIdade")
        for(let i = 0; i < deIdade.length; i++) {
            for (let x = 0; x <= 9; x++) {
                if( x == deIdade[i]) {
                    const novaImagem = document.createElement("img")
                        novaImagem.src = "img/" + `${x}.jpg`
                        resp.appendChild(novaImagem)
                }
            }            
        }
        const br = document.createElement("br")
        resp.appendChild(br)

    }

    }

   

function newVelas() {
    localStorage.removeItem("numIdade")
    window.location.reload()
}

window.addEventListener("load", criarVelas)
