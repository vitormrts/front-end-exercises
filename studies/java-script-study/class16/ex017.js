function fatorial(n) {
    let fat = 1;
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

function fatorial_recursivo(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial_recursivo(n-1)
    }
}

console.log(fatorial(3))
console.log(fatorial_recursivo(5))