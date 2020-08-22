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
/*
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

console.log('Teste JS 2'.reverse()) //para este caso, o tostring do return da funcao não é sobrescrito */
/*
function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) { // ...mantém os valores do objeto inicial (neste caso aula1 e 2) //concatena em um array
    const obj = {} //cria um novo objeto
    obj.__proto__ = f.prototype //f.prototype está apontando para o prototipo da funcao passada, no caso Aula() //associou o prototype da funcao para o prototype do objeto
    f.apply(obj, params) //paassando para objeto os parametros novos e retornado //#applay executa a funcao passada, neste caso "f"
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)*/
/*
const produto = Object.preventExtensions({  //não permite que o objeto seja extendido //pode excluir mas não adicionar atributos
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) //isExtensible verifica se o objeto foi criado como extensivo ou nao

produto.nome = 'Borracha' //nome pode ser modificado
produto.descricao = 'Borracha escolar branca' //descricao nao pode ser incluído
delete produto.tag //tag pode ser removida
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) //seal permite que os atributos sejam sobrescritos, mas não removidos e nem adicionados
console.log('Selado:', Object.isSealed(pessoa)) //verifica se o objeto é selado ou não

pessoa.sobrenome = 'Silva' //atributo nao adicionado
delete pessoa.nome //nome não removido
pessoa.idade = 29 //idade foi sobrescrita
console.log(pessoa)

// Object.freeze = selado + valores constantes

*/


//Json é um formato textual que pode ser utilizado por quase todas as linguagens
//Json não carrega consigo funções, diferente de objeto
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) //converte apenas os valores do retorno do objeto (não retorna a função)

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) //não é formato válido
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) //não é formato válido
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) //objeto gerado através da conversão de um JSON
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))