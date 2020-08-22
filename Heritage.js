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
/*
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
console.log(ferrari.status()) */

/*const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) //criando objeto e definindo que pai é o prototype
filha1.nome = 'Ana'
console.log(filha1.corCabelo) //shadowing

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }  //criando objeto, pai definido como prototype e definindo atributos da filha 2
})

console.log(filha2.nome)
filha2.nome = 'Carla' //nome Carla não é atribuido pois a definicao do nome é #Writable = false 
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //retorna as chaves [nome]
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? //verifica se a propriedade pertence ao objeto que esta percorrendo no momento (filha 2)
        console.log(key) : console.log(`Por herança: ${key}`) //neste caso, a key é herdada, então retorna o else
}*/
/*
function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) //todos objetos criados através de uma funcao construtora apontam para o mesmo prototype
console.log(MeuObjeto.prototype === obj1.__proto__) //ao criar objeto a partir de new, o prototipo aponta para a funcao que criei .prototype

MeuObjeto.prototype.nome = 'Anônimo' //todos atributos criados dentro do prototype, os herdeiros possuiram os mesmos
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()
s
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //criando objeto e definindo o prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype) //objeto tem um prototype que é uma funcao apontando para prototype
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) */

console.log(typeof String) 
console.log(typeof Array)
console.log(typeof Object) //tudo é função 

String.prototype.reverse = function () { 
    return this.split('').reverse().join('')
}

console.log('Teste JS'.reverse())

Array.prototype.first = function() { //funcoes não existem no prototype, mas podem ser criadas como reverse  ou first
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Teste JS 2'.reverse()) //para este caso, o tostring do return da funcao não é sobrescrito 