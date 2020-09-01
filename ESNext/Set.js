// não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times) //só irá retornar o vasco uma vez

console.log(times.size)
console.log(times.has('vasco')) //false pois vasco inicial com maiúscula
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'] //mesmo o valor duplicado no array, ao passar para o Set, o mesmo não duplica
const nomesSet = new Set(nomes)
console.log(nomesSet)