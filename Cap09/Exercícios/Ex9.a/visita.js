
const nome = prompt("Qual é o Seu nome?")
const cel = Number(prompt("Celular de cadastro (apenas os numeros)"))


const salvando = () => {

    if(localStorage.getItem("acessoNome")) {
        const acessoNome = localStorage.getItem("acessoNome") + ";" + nome
        const acessoCel = localStorage.getItem("acessoCel") + ";" + cel
        localStorage.setItem("acessoNome", acessoNome)
        localStorage.setItem("acessoCel", acessoCel)

        
    }else {
        localStorage.setItem("acessoNome", nome)
        localStorage.setItem("acessoCel", cel)
    }

}

const acesso = () => {
    if(localStorage.getItem("acessoCel")) {
        const celular = localStorage.getItem("acessoCel").split(";")

        if(celular.includes(cel.toString())){
            alert(`Seja Bem vindo(a) novamente ${nome}`)
        } else {
            alert(`Seja Bem vindo(a) ${nome}`)
            salvando() //chamando a funcao
        }
        return 
    }else {
        false
        alert(`Seja Bem vindo(a) ${nome}`)
        salvando() //chamando a funcao
        
    }
}

acesso()




