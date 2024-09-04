const frm = document.getElementById("cadastrando")
const resp = document.getElementById("respCdt")

frm.addEventListener("submit", (e) => {

        const nome = String(frm.inNome.value)
        resp.innerText = `Seja bem-vindo ${nome}`
        e.preventDefault()

}
)

