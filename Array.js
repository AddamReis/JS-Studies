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
const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) { //Por padrão, (e) se refere ao elemento do array
    return e * 2                       //percorrendo cada item do array, multiplicando por 2 e salvando em outro array
})

console.log(resultado)

const soma10 = e => e + 10 //arrow por  padrão tem o return embutido, não precisa da declaração para retornar
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) //chamada de métodos em sequence para o mesmo array //para cada map foi gerado um novo array
console.log(resultado)