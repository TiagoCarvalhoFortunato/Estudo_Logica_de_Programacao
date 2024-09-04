const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [] //declara vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inPaciente.value //obter o nome do Paciente
    pacientes.push(nome)    //adiciona o paciente no final do vetor

    let lista = ""

    for ( let i = 0; i < pacientes.length; i++ ) {

        lista += `${i + 1}. ${pacientes[i]} \n`

    }

    respLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()

})

frm.btUrgencia.addEventListener("click", () => {
    //verifica se as validações do form estão Ok (no caso, paciente is required)
    if(!frm.checkValidity()) {
        alert("Informe o nome do Paciente a ser atendido em caráter de urgência")

        frm.inPaciente.focus()
        return

    }

    const nome = frm.inPaciente.value
    pacientes.unshift(nome)
    let lista = ""
    pacientes.forEach((paciente, i) => {

        (lista += `${i + 1}. ${paciente} \n`)
        respLista.innerText = lista
        frm.inPaciente.value = ""
        frm.inPaciente.focus()

    })

})

frm.btAtender.addEventListener("click", () => {

    if (pacientes.length == 0) {
        alert(" Não há Pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }
    const atender = pacientes.shift()
    respNome.innerText = atender
    let lista = ""

    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente} \n`))
    respLista.innerText = lista


})