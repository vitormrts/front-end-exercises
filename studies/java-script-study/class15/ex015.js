let num = [3, 2, 0, 5] // declaracao do array
num[4] = 6 // cria um elemento no array na posicao 3, indice 6
num.push(7) // adiciona o elemento
let tam = num.length // tamanho do vetor
num.sort() // ordena o vetor
num.indexOf(3) // retorna o index do 3, ou seja, 0

for (let c = 0; c < num.length; c++) {
    console.log(num[c])
}

for (let pos in num) {
    console.log(num[pos])
}