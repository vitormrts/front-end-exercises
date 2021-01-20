var btn_adicionar = window.document.getElementById("adicionar")
let numerotxt = window.document.getElementById("numero")
let tabela = window.document.getElementById("nadcs")
let btn_finalizar = window.document.getElementById("finalizar")
let res = window.document.getElementById("res")

btn_finalizar.addEventListener("click", finalizar)
btn_adicionar.addEventListener("click", adicionar_elemento)
 
var array = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inArray(n, array) {
    if (array.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar_elemento() {

    if (isNumber(numerotxt.value) && !inArray(numerotxt.value, array)) {
        let n = Number(numerotxt.value)
        array.push(n)
        let item = document.createElement("option")
        item.text = `Valor ${n} adicionado.`
        item.value = `tabela${n}`
        tabela.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert("[ERRO] Numero invalido ou ja encontrado na lista")
    }
    numerotxt.value = ""
    numerotxt.focus()
}



function finalizar() {
    let tam = array.length
    if (tam == 0) {
        window.alert("[ERRO] Nenhum elemento inserido")
    } else {
        numerotxt.value = ""
        numerotxt.focus()

        let maior = array[0]
        let menor = array[0]
        let soma = 0

        array.sort()

        for (let pos in array) {
            soma += array[pos]
            if (array[pos] > maior) {
                maior = array[pos]
            }
            if (array[pos] < menor) {
                menor = array[pos]
            }
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos <strong>${tam}</strong> numeros cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores e ${soma}</p>`
        res.innerHTML += `<p>A media e de ${soma/array.length}</p>`


        

    

    }
}