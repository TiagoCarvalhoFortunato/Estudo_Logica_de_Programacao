
const amigos = [ {
    nome: "tiago", idade: 32},
    {nome: "carol", idade: 28},
    {nome: "Tainara", idade: 24}

]

const amigos2 = amigos.filter(aux => aux.idade >= 30 || aux.nome.charAt(0).toUpperCase().includes("C") ) // ou === "C"

for (const amigo of amigos2) {
    console.log(` ${amigo.nome.charAt(0).toUpperCase()}${amigo.nome.substring(1)} e ${amigo.idade}  `)
}

