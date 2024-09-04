const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const itens = []

frm.rdPizza.addEventListener("click", () =>{

    
    frm.inBebida.className = "oculta"
    frm.inPizza.className = "exibe"

})

frm.rdBebida.addEventListener("click", () =>{

    frm.inBebida.className = "exibe"
    frm.inPizza.className = "oculta"


})

frm.inDetalhes.addEventListener("focus", () => {

    if (frm.rdPizza.checked) {
        const pizza = frm.inPizza.value
        const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4
        frm.inDetalhes.placeholder = `Até ${num} sabores`
        }

    })

    
    frm.inDetalhes.addEventListener("blur", () => {

        frm.inDetalhes.placeholder = ""

    })


    frm.addEventListener("submit", (e) => {
        e.preventDefault()

        let produto
        if (frm.rdPizza.checked) {
            const num = frm.inPizza.selectedIndex //obtém o nº do item selecionado
            produto = frm.inPizza.options[num].text //texto do item selecionado
        } else {
            const num = frm.inBebida.selectedIndex
            produto = frm.inBebida.options[num].text
        }

        const detalhes = frm.inDetalhes.value
        itens.push(`${produto} ( ${detalhes} )`)
        resp.innerText = itens.join("\n")

        frm.reset()
        frm.rdPizza.dispatchEvent(new Event("click")) //dispara click em rvPizza

    })