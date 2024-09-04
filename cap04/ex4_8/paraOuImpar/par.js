const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()
    const numb = Number(frm.num.value)

    if ( numb % numb == 0 ) {

        resp.innerText = `${numb} é par`

    } else {

        resp.innerText = `${numb} é ímpar`

    } 

})