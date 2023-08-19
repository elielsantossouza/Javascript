var numeros = [4, 5, 6, 7, 4]

for (var n in numeros) {
    console.log(`O valor na posição ${n} do array é ${numeros[n]}`)
}

for (var n of numeros) {
    console.log(n)
}

console.log(numeros.indexOf(5))