var inicio = window.document.querySelector('#inicio')
var fim = window.document.querySelector('#fim')
var passo = window.document.querySelector('#passo')
var contagem = window.document.querySelector('#contagem')

var cont = ''
function contar() {
    for (var c = Number(inicio.value) ; c < Number(fim.value)+1 ; c+= Number(passo.value)) {
        if (Number(passo.value) <= 0) {
            passo.value = 1
        }
        cont += `${c} 👉 `
    }
    contagem.innerHTML = `<p>${cont} 🏁</p>`
}