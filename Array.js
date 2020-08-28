/*const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//remove o ultimo elemento 
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos) //adiciona na ultima posição

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona ao primeiro elemento
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // a partir da 3º posicao, remove 1
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do indice informado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)*/
/*
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) { //callback com 2 parametros
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) //Arrow Apenas com 1 parametro

const exibirAprovados = aprovado => console.log(aprovado) //passando a funcao para uma const
aprovados.forEach(exibirAprovados) //executando foreach na const
*/
/*
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) //Armazenado a callback dentro do prototype de Array
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {  //executando os índices do array
    console.log(`${indice + 1}) ${nome}`)
})
*/

//Map pode ser utilizado para mapear os dados de um array, gerar outro array com os dados transformados.
//O array gerado através do Map terá o mesmo tamanho do array original
/*const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) { //Por padrão, (e) se refere ao elemento do array
    return e * 2                       //percorrendo cada item do array, multiplicando por 2 e salvando em outro array
})

console.log(resultado)

const soma10 = e => e + 10 //arrow por  padrão tem o return embutido, não precisa da declaração para retornar
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) //chamada de métodos em sequence para o mesmo array //para cada map foi gerado um novo array
console.log(resultado)*/
/*
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)*/

/*Array.prototype.map2 = function(callback) { //Map2 no prototype
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this)) //(elemento atual #this[], indice #i e o array #this)
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado) //O retorno será o mesmo, porém é uma segunda forma de implementar o mesmo*/

//Filter é utilizado para filtrar os dados dentro do array

/*const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false                            //Para cada elemento (p) passado na callback, ele não estará presente noo array final 
}))

const caro = produto => produto.preco >= 500 //const que contém função 
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil)) //passado as duas funcoes, tanto p/ valores acima de 500 quanto p/ fragil == true*/

/*Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) { //elemento, índice e array
            newArray.push(this[i])       //
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))*/

//Reduce tem como função "concatenar" os indices  
// 1º elemento é o acumulador - 2º elemento é o índice atuaal
/*
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota)) //extraindo apenas a nota

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)
 
// Valor inicial definido como 0, joao foi o primeiro índice somando o inicial (0 + 7.3) ==7.3
// Na segunda vez da callback, pega o valor resultante anterior (7.3) somando com a maria (7.3 + 9.2) ==16.5
// Na terceira vez, pegou o resultante (16.6) e somou com pedro (9.8) ==26.3
// E assim sucessivamento
console.log(resultado)*/

/*const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista //Verifica se todos são bolsistas, neste caso é false
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista //verifica se algum é bolsista, neste caso verdadeiro
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))*/

  
/*Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21)) //callback e vlInicial
*/

  
const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)