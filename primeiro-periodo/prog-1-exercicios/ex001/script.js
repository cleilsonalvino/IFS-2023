function verificar() {
    var user1 = document.getElementById('nome-1')
    var user2 = document.getElementById('nome-2')
    var useralt1 = document.getElementById('alt-1')
    var useralt2 = document.getElementById('alt-2')
    var alt1 = Number(useralt1.value)
    var alt2 = Number(useralt2.value)
    var res = document.getElementById('res')
    res.style.textAlign = 'center'


     if (useralt1.value.length == 0 || useralt2.value.length == 0 || user1.value.length == 0 || user2.value.length == 0) {
        alert('Preencha todos os campos!')
    } else if (alt1 == alt2) {
        res.innerHTML = 'Olha, temos alturas iguais!'
    } else if (alt1  > alt2) {
        res.innerHTML = `${user1.value} é o mais alto!`
    } else {
        res.innerHTML = `${user2.value} é o mais alto!`

    }
    

}

function verificar2() {
    var numero = document.getElementById('num')
    var num = Number(numero.value)
    var res = document.getElementById('res-1')

    if (numero.value.length == 0) {
        alert('Digite um valor!')
    } else if (num % 2 == 0) {
        res.innerHTML = 'Deu par!'
    } else {
        res.innerHTML = 'Deu ímpar!'
    }
}

function verificar3() {
    var numero1 = document.getElementById('nump')
    var numero2 = document.getElementById('nums')
    var num1 = Number(numero1.value)
    var num2 = Number(numero2.value)
    var res = document.getElementById('res-2')

    if (numero1.value.length == 0 || numero2.value.length == 0) {
        alert('Preencha todos os campos!')
    } else if (num1 > num2) {
        res.innerHTML = `${num1} é o maior!`
    } else {
        res.innerHTML = `${num2} é o maior!`
    }
}


function verificar4() {
    var numero = document.getElementById('numpn')
    var num = Number(numero.value)
    var res = document.getElementById('res-3')

    if (numero.value.length == 0) {
        alert('Valor inválido!')
    } else if(num < 0){
        res.innerHTML = 'Valor negativo!'
    } else if (num === 0) {
        res.innerHTML = 'Zero é neutro!'
    } else {
        res.innerHTML = 'Valor positivo!'
    }
}

function verificar5() {
    var numero1 = document.getElementById('num-1')
    var numero2 = document.getElementById('num-2')
    var numero3 = document.getElementById('num-3')
    var num1 = Number(numero1.value)
    var num2 = Number(numero2.value)
    var num3 = Number(numero3.value)
    var res = document.getElementById('res-4')

    if (numero1.value.length == 0 || numero2.value.length == 0 || numero3.value.length == 0) {
        alert('Preencha todos os campos!')
    } else if (num1 > num2) {
        res.innerHTML = `${num1} é o maior!`
    } else if (num2 > num1 && num3 < num2) {
        res.innerHTML = `${num2} é o maior!`
    } else {
        res.innerHTML = `${num3} é o maior!`
    }
}
