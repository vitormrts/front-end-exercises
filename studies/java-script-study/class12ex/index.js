function load() 
{
    var img = window.document.getElementById("photo")
    var msg = window.document.getElementById("msg")
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `Agora sao ${hour} horas.`
    if (hour >= 6 && hour <= 12) 
    {
        img.src = 'assets/dayfull.jpeg'
        document.body.style.background = '#e2cd9f'
    }
    else if (hour > 12 && hour < 18)
    {
        img.src = 'assets/afternoonfull.jpeg'
        document.body.style.background = '#b9846f'
    }
    else
    {
        img.src = 'assets/nightfull.jpeg'
        document.body.style.background = '#515154'
    }

}



