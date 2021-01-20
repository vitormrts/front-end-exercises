var btn = window.document.querySelector("input#contar")
btn.addEventListener("click", contar)

function contar()
{
    let inicio = window.document.getElementById("inicio")
    let fim = window.document.getElementById("fim")
    let passo = window.document.getElementById("passo")
    let res = window.document.getElementById("res")

    if (inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0) {
        window.alert("[ERRO] Faltam dados.")
    } 
    else {
        res.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p == 0) {
            window.alert("Considerando passo 1")
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} -> `
            }
        }
        else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} -> `
            }
        }
    }
    res.innerHTML += "Fim"
}