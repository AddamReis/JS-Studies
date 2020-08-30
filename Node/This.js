console.log(this === global)
console.log(this === module)

console.log(this === module.exports) //O this dentro de um módulo aponta para module.exports
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) //this dentro de uma função aponta para global
}

logThis()