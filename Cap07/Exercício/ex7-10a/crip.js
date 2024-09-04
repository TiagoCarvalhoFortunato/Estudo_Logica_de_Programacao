const frm = document.querySelector("form")
const resp01 = document.getElementById("resp1")
const resp02 = document.getElementById("resp2")

let par = []
let impar = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const palavra = frm.inText.value

    resp01.innerText = `${palavra}`

})

frm.btCrip.addEventListener("click", () => {

    const palavra = frm.inText.value

    for( let i = 0; i <= palavra.length; i++ ) {

        if (i % 2 == 0) {

            impar.push(palavra.charAt(i))

        }else {
            
            par.push(palavra.charAt(i))

        }

    }

    resp02.innerText = `${par.join("")}${impar.join("")}`
    par = []
    impar = []

})

frm.btDecrip.addEventListener("click", () => {

    const palavra = frm.inText.value
    resp02.innerText = `${palavra}`

})