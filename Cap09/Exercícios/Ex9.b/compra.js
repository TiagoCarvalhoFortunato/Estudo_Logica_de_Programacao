const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const produto = frm.inProduto.value.toUpperCase()

    if(validandoProduto(produto)) {
        alert(`Produto já Adicionado`)
        frm.inProduto.value = ""
        frm.inProduto.focus()
        return
    }

    if(localStorage.getItem("carrinhoProduto")) {
        const carrinho = localStorage.getItem("carrinhoProduto") + ";" + produto
        localStorage.setItem("carrinhoProduto", carrinho)
    } else {
        localStorage.setItem("carrinhoProduto", produto)
    }

    frm.inProduto.value = ""
    frm.inProduto.focus()
    produtoLista()

})

const validandoProduto = (produto) => {
    if(localStorage.getItem("carrinhoProduto")) {

        const produtos = localStorage.getItem("carrinhoProduto").split(";")
        return produtos.includes(produto.toString())

    } else {
        return false
    }
}

const produtoLista = () => {
    if(localStorage.getItem("carrinhoProduto")) {
        let list = "Produtos Adicionados"
        list += "\n----------------------------------"

        let listprodutos = localStorage.getItem("carrinhoProduto").split(";")
        listprodutos.sort()
        for(let i = 0; i < listprodutos.length; i++) {
            list += "\n" + listprodutos[i]
        }
        
    resp.innerText = list  
    }

}

btLimpar.addEventListener("click", () => {

    localStorage.clear("carrinhoProduto")
    resp.innerText = ""

})

window.addEventListener("load", produtoLista)
