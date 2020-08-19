// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
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

