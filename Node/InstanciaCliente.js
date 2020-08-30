  
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica') //retorna funcao pois o node por padrão faz cache

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')() //retorna objeto //invocando factory //novas instancias criadas a partir de uma factory

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) //Incrementa o valor também em B pois a função está em cache

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) //não incrementa o valorD pois não é o mesmo objeto