const fmr = document.querySelector("form")
const resp = document.getElementById("resp1")
const resp0 = document.getElementById("resp2")


fmr.addEventListener("submit", (e) => {
    e.preventDefault()

    let ladoA = Number(fmr.inA.value)
    let ladoB = Number(fmr.inB.value)
    let ladoC = Number(fmr.inC.value)
 
    if (ladoA + ladoB < ladoC || ladoA + ladoC < ladoB || ladoB + ladoC < ladoA) {

        resp.innerText = `Essas medidas não formam um Triângulo`
        return
    }

    if (ladoA == ladoB && ladoB == ladoC) {

        resp.innerText = `Lados podem formar um triângulo`
        resp0.innerText = `Tipo = Equilátero`

    } else if ( ladoA == ladoB && ladoB != ladoC || ladoA == ladoC && ladoC != ladoB || ladoB == ladoC && ladoC != ladoA ) {

        resp.innerText = `Lados podem formar um triângulo`
        resp0.innerText = `Tipo = Isósceles`

    }else {

        resp.innerText = `Lados podem formar um triângulo`
        resp0.innerText = `Tipo = Escaleno`
    }



})