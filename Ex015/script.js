var userValues = []
var userInput = document.getElementById('user_value')
var lista = document.getElementById('flista')
var resposta = document.getElementById('res')

function isNumero(v) {
    if (Number(v) >= 1 && Number(v) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inArray(v, l) {
    if (l.indexOf(Number(v)) != -1) {
        return true
    }
    else {
        return false
    }
}
function add() {
    if (isNumero(userInput.value) && inArray(userInput.value, userValues)) {
        window.alert('Tudo OK')
    }
    else {
        window.alert(`${userValues}`)
    }
}