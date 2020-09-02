const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento) //na primeira chamada irá pegar o primeiro elemento do array
    .then(primeiroElemento) //na segunda irá pegar o primeiro índice do elemento retornado
    .then(letraMinuscula)
    .then(console.log) //como promisse sempre recebe apenas um valor, neste caso não ocorre a necessidade de declarar o que será exibido