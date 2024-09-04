const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    let numDivisor = 0

    for(let i = 1; i <= num; i++) {
        if (num % i == 0) {

            numDivisor++
            
        }
    }

    if (numDivisor == 2) {

        resp.innerText = `${num} é um número primo`


    } else {
        resp.innerText = `${num} não é um número primo`
    }

})