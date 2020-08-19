const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

/*PROTOTYPE está presente apenas dentro de funcoes*/

console.log(ferrari.prototype) //Objeto não possui um prototype
console.log(ferrari.__proto__)  // is a Object
console.log(ferrari.__proto__ === Object.prototype) //tanto ferrari quanto volvo possuem um prototype (herança)
console.log(volvo.__proto__ === Object.prototype) 
console.log(Object.prototype.__proto__ === null) //Object é uma função, e toda função tem um prototype

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype) 