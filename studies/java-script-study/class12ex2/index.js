var btn = window.document.querySelector("input#verificar")
btn.addEventListener("click", verificar)

function verificar()
{
    let date = new Date()
    let year = date.getFullYear()

    let tyear = document.getElementById("txtano")
    let res = document.getElementById('res')

    let img = document.createElement("img")
    img.setAttribute("id", "photo")

    if (tyear.value.length == 0 || tyear.value.length > year) 
        window.alert("[ERRO] Verifique seus dados novamente.")
    else 
    {
        let sex = document.getElementsByName("radsex")
        let yearsold = year - Number(tyear.value)
        let genero = ''
        
        if (sex[0].checked)
        {
            genero = 'Homem'
            if (yearsold < 10) 
            {
                img.setAttribute("src", "./assets/homembebe.jpeg")
            }

            else if (yearsold < 21)
            {
                img.setAttribute("src", "./assets/homemjovem.jpeg")
            }

            else if (yearsold < 50)
            {
                img.setAttribute("src", "./assets/homemadulto.jpeg")
            }

            else
            {
                img.setAttribute("src", "./assets/homemidoso.jpeg")
            }
        }

        else 
        {
            genero = 'Mulher'
            if (yearsold < 10)
            {
                img.setAttribute("src", "./assets/mulherbebe.png")
            }

            else if (yearsold < 21)
            {
                img.setAttribute("src", "./assets/mulherjovem.jpeg")
            }

            else if (yearsold < 50)
            {
                img.setAttribute("src", "./assets/mulher.png")
            }
            else
            {
                img.setAttribute("src", "./assets/mulheridosa.jpeg")
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${yearsold} anos.`
        res.appendChild(img)
    }
}