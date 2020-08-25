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

Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) //Armazenado a callback dentro do prototype de Array
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {  //executando os índices do array
    console.log(`${indice + 1}) ${nome}`)
})
