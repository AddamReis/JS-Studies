//function js é First-Class Object (Citizens)
//Higher-order function
/*
//create function
function fun1() { }

//func in variavel
const fun2 = function () {}

//add func to array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//func in Obj
const obj = {}
obj.falar = function() {return 'Helo'}
console.log(obj.falar())

//func in func
function run(fun){
    fun()
}
run(function () {console.log('RUN...!!!...')})

//func in func 2
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(7, 3)(1)
//OR
const val = soma(7,3)
val(1)

*/

//Arguments for in
/*
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1.1, 2.2, 3.3))

//standard value (defuze)
function somax(a, b, c){
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // <--- best use
    return a + b + c
}
console.log(somax(5, 8, 6), somax(0, 0, 0))

//standard value (ES6)
function somay(a =1, b = 1, c =1 ){
    return a + b + c
}
console.log(somay(10, 12, 14), somay(0, 0, 0))
*/

//This & Bind
/*const pessoa = {
    saudacao : 'Ola Mundo',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas Funcional e OO

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()

//part 2

function Pessoa(){
    this.idade =  0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }//.bind(this)
    , 1000)
}

new Pessoa

//Arrow
let ola = function() {
    return 'Oi!'
}

ola = () => 'Ola'
console.log(ola())
ola = _ => 'Oi'
console.log(ola())
*/

//Anonymous Func

/*const soma = function (x, y) {
    return x + y
}
const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, function(x, y){
    return x -y 
})

imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function() {
        console.log('Opa')
    }
}
pessoa.falar()*/

//Callback
/*
const fabricantes = ["GM","Audi","Renault"]
function imprimir(nome, indice){
console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))


const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//not callback
const notasbaixas1 = []
for (let i in notas){
    if(notas[i] < 7 ){
        notasbaixas1.push(notas[i])
    }
}
console.log(notasbaixas1)

//in callback
const notasbaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasbaixas2)

//Arrow Callback
const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)
*/

//Constructor
/*
function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
*/

//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular veriáveis externas à função
const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())