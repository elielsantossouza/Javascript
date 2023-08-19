//Dia da semana
var agora = new Date()
switch (agora.getDay()) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
}

//Mês atual
console.log(`Mês atual: ${agora.getMonth()+1}`)

//Data mais dias
function data_e_dias(data, dias) {
    var dia = Number(data.slice(0, 2))
    return `${dia+dias}${data.slice(2)}`
}
console.log(data_e_dias('27/02/2021', 2))