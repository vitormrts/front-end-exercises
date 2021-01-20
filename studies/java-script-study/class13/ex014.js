var i = 0

function comerPizza() {
    var resta = 8
    var comeu = 0

    while (resta > 0) {
        resta--
        comeu++
        console.log(`Voce comeu ${comeu} fatias, agora sobram ${resta}`)
    }
    console.log("Voce comeu toda pizza")
}

comerPizza()