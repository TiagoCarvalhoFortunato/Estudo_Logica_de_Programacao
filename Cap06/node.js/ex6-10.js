const prompt = require("prompt-sync")()
console.log("Informe os alunos. Após, digite 'Fim' no nome para sair")

const alunos = []
do {
    const nome = prompt("Nome: ")
    if (nome == "Fim") {
        break
    }
    const nota = Number(prompt("Nota: "))
    alunos.push({nome, nota})
    console.log(`Ok! Aluno(a) ${nome} cadastrado com Sucesso `)
} while(true) 
console.log("-".repeat(40))
const maior = alunos.reduce((a,b) => Math.max(a, b.nota), 0)
console.log(`Maior Nota: ${maior}`)

if ( maior >= 7 ) {

    const destaque = alunos.filter(aluno => aluno.nota == maior)
    for (const destaques of destaque) {
        console.log(`- ${destaques.nome} `)
    }

} else {

    console.log("Não há alunos em destaque na turma !")

}