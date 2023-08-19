var numeros = []
var sum = 0

for (var n = 1; n < 11; n++) {
    numeros.push(parseInt(Math.random() * 11))
}

for (var n of numeros) {
    sum += n
}
console.log(`A média dos valores é igual à ${sum/numeros.length}`)