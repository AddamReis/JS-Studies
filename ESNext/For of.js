for (let letra of "Cod3r") { //retorno cada índice em uma linha
    console.log(letra) 
}

const assuntosEcma = ['Map', 'Set', 'Promise']

/*formas de percorrer Array*/
for (let i in assuntosEcma) { //retorna a posição de cada índice [0], [1]...
    console.log(i)
}

for (let assunto of assuntosEcma) { //retorna cada valor do array separadamente [map],[set]...
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

/*Formas de percorrer o Map*/
for (let assunto of assuntosMap) {//retorna toda todo o Map
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) { //retorna apenas as chaves 'Map', 'Set'....
    console.log(chave)
}

for (let valor of assuntosMap.values()) { //retorna apenas apenas os valores 'abordado: true'....
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) { //retorna o par de chave e valor
    console.log(ch, vl)
}

//Formas de percorrer o Set
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}