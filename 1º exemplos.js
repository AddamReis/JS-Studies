/*//typeof
let a = 'teste'
console.log('type: ' + typeof a + ' ||' + ' text: ' + a)

//casas decimais
const val1 = 10 * 1.7 / 0.72 + 3;
console.log(val1);
console.log(val1.toFixed(3))

//convert to binary
console.log(val1.toString(2))
*/

//Math func
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log(area)
console.log(typeof Math)

//Obj
//key and value
const prod1 = {}
prod1.nome = 'Vehicle Athum'
prod1.valor = 5422.29
//OR
prod1['Vehicle Tesla'] = 99532.87
console.log(prod1)

//JSON
const prod2 = {"nome" : "Vehicle Cyber", "valor" : 15744.55}
console.log(prod2)

//Hoisting
console.log('a = ', a)
var a = 2
console.log('a = ', a)

/*Cannot access 'b' before initialization*/ 
console.log('b =', b)
let b = 2
console.log('b =', b)