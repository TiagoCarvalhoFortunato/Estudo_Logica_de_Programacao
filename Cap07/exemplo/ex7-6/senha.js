const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const senha = frm.inSenha.value
    const erros = [] // vetor de erros

    if (senha.length < 8 || senha.length > 15 ){

        erros.push("possuir entre 8 e 15 caracteres")
    }

    if (senha.match(/[0-9]/g) == null) {

        erros.push("possuir números ( no mínimo, 1 )")

    }

    if (!senha.match(/[a-z]/g)){

        erros.push("possuir letras minúsculas (no mínimo, 1)")

    }

    if (!senha.match(/[A-Z]/g)) {

        erros.push("possuir letras maiúscula ( no mínimo, 1 )")
    }

    if (!senha.match(/[\w|_]/g)) {

        erros.push("possuir símbolos ( no mínimo, 1 )")


    }

    if (senha.length == 0) {

        resp.innerText = `POR FAVOR! Insira uma senha !!!!`

    } else {

        resp.innerText = `ERRO !!! ${erros.join(", ")}`
    }


})