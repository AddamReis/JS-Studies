const moduloA = require('./ModuleA.js')
const moduloB = require('./ModuleB.js')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)

//Por pardrão,  cada arquivo (Módulo) é privado, para que outros módulos consigam acessa-lo, é necessário exportar e importar.