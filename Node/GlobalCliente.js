require('./global') //acessando Global

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' //não foi possível altera o nome pois o mesmo está imutavel no global
console.log(MinhaApp.nome)