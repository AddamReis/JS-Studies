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