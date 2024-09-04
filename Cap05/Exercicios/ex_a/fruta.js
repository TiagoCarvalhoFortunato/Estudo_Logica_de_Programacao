const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const fruta = frm.inFruta.value
    const quant = Number(frm.inNumber.value)

    let nameFruta = ""

    for (let i = 1; i < quant; i++){

        nameFruta = nameFruta + `${fruta} * `

        resp.innerText = nameFruta + `${fruta}`
    }

})