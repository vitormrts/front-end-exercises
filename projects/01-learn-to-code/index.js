var btn_confirm = window.document.querySelector("button#confirm")
var dados = window.document.querySelector("div#dados")

var dict = {
    "name": "First Name",
    "last-name": "Last Name",
    "email": "Email",
    "password": "Password"
}

var mudou = false

btn_confirm.addEventListener("click", finish)
btn_confirm.onmouseover = function() {btn_confirm.style.background = "hsl(154, 80%, 61%)"}
btn_confirm.onmouseout = function() {btn_confirm.style.background = "hsl(154, 59%, 51%)"}


function changeColor() {
    btn_confirm.style.background = "blue"
}

function finish() {
    let nome = window.document.querySelector("input#name")
    let last_name = window.document.querySelector("input#last-name")
    let email = window.document.querySelector("input#email")
    let password = window.document.querySelector("input#password")
    let array = [nome, last_name, email, password]

    if (!isEmpty(nome) && !isEmpty(last_name) && !isEmpty(password) && validate_email(email)) {
        if (mudou) {
            for (pos in array) {
                let item = array[pos]
                item.removeAttribute("class")
                item.removeAttribute("style")
            }
        }
        window.alert("Cadastro concluido.")
    }
    else {
        for (pos in array) {
            let item = array[pos]
            if (isEmpty(item)) {
                item.style.borderColor = "hsl(0, 100%, 74%)"
                item.style.borderWidth = "2px"
                item.placeholder = `${dict[item.id]} cannot be empty`
                item.classList.add("custom-placeholder")
                item.style.backgroundImage = 'url(./images/icon-error.svg)'
                mudou = true
            }
        }
    }
}

function isEmpty(props) {
    if (props.value.length == 0) {
        return true
    }
    return false
}

function validate_email(email) {
    let user = email.value.substring(0, email.value.indexOf("@"))
    let dom = email.value.substring(email.value.indexOf("@") + 1, email.value.length)


    if ((user.length >= 1) &&
        (dom.length >= 3) &&
        (user.search("@") == -1) &&
        (dom.search("@") == -1) &&
        (user.search(" ") == -1) &&
        (dom.search(" ") == -1) &&
        (dom.search(".") != -1) &&
        (dom.indexOf(".") >= 1) &&
        (dom.lastIndexOf(".") < dom.length - 1)
        ) {
            return true
    }
    return false
}
