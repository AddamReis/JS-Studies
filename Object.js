// pessoa -> 123 -> {...}
/*const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' } --Erro pois não é possível associar outra constante (Endereço de memória) em uma constante já existente

Object.freeze(pessoa) //freeze congela tanto o valor da constante quanto o enderço de memória, tornando um Objeto Constante
//Qualquer tipo de alteracao posterior sobre esse Objeto constante não irá modificar os valores.

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
*/

//Getter Setter
//Getter and Setter serve para regrar meu objeto
/*const sequencia = {
    _valor: 1, // convenção
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

//Neste caso, eu nunca iria ter um retorno < que o valor inicial ( == 1)
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor) */


/*const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', { //define as propriedades do objeto
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) //Pega o Objeto de destino e adiciona os outros objetos dentro, 
//neste caso, incluindo o1 dentro do dest, e sobrepondo o (a: 1) do dest pelo (a: 4) do o2  

Object.freeze(obj)
obj.c = 1234
console.log(obj)*/