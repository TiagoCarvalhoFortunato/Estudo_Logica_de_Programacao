const fmr = document.querySelector("form")
const resp = document.querySelector("h3")

fmr.addEventListener("submit", (e) => {

    e.preventDefault()

    const vp = Number(fmr.perm.value)
    const vc = Number(fmr.cond.value)

    
    const leve = Number((vp * 0.20) + vp)

    if (vc <= vp ){

        resp.innerText = `Sem Multa`
        return

    } else if (vc > vp && vc <= leve ) {

        resp.innerText = `Multa Leve`

    } else {

        resp.innerText = `Multa Grave`

    }


})