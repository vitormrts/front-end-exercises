const btn = window.document.querySelector("input#gerartabuada")
btn.addEventListener("click", gerar_tabuada)

function gerar_tabuada()
{
    let num = window.document.getElementById("numero")
    let tab = window.document.getElementById("seltab")

    if (num.value.length == 0) {
        window.alert("[ERRO] Digite um numero")
    } else {
        let n = Number(num.value)
        tab.innerHTML = ""
        for (var i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n * i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}