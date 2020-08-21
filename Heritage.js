/*const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//PROTOTYPE está presente apenas dentro de funcoes

console.log(ferrari.prototype) //Objeto não possui um prototype
console.log(ferrari.__proto__)  // is a Object
console.log(ferrari.__proto__ === Object.prototype) //tanto ferrari quanto volvo possuem um prototype (herança)
console.log(volvo.__proto__ === Object.prototype) 
console.log(Object.prototype.__proto__ === null) //Object é uma função, e toda função tem um prototype

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
*/

Object.prototype.attr0 = '0' // não fazer atribuição diretamente ao prototype!

const avo = { attr1: 'A' } //neste caso, o avô aponta para o prototype
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) //#sombreamento (attr3 do filho sombreou o attr3 do pai na chamada do filho)
//na chamada, se o filho nao possuir o atributo, verifica a se o pai tem, caso não possuir verificado se o avô tem 


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40', //shadowing
    status() {
        return `${this.modelo}: ${super.status()}` //shadowing //super. chama o méetodo do protótipo
    }
}

Object.setPrototypeOf(ferrari, carro) //neste momento estou falando que, ferrari tem carro como seu protótipo 
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status()) 