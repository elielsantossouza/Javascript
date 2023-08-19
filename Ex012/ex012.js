var numeros = [4, 3, 7, 8, 9]

//Adicionando ítem na última posição do array
numeros.push(1)

//Mostrando a quantia de ítens presentes no array
console.log(numeros.length)

//Ordenando valores númericos de forma crescente
console.log(numeros.sort())

//Mostrando cada ítem do array usando o laço for
for (var pos = 0; pos < numeros.length ; pos++) {
    console.log(numeros[pos])
}