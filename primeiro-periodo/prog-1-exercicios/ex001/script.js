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
