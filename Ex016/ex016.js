var myInput = window.document.querySelector('#myInput')
/*
window.addEventListener('load', foco())

function foco() {
    myInput.focus()
}
*/
var corpo = window.document.body
const newdiv = document.createElement('div')
newdiv.innerText = 'Olá'
newdiv.style.width = '100px'
newdiv.style.height = '100px'
newdiv.style.backgroundColor = 'red'
corpo.appendChild(newdiv)