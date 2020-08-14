//function js é First-Class Object (Citizens)
//Higher-order function

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
