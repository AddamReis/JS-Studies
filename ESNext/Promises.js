function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //reject(frase)
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))

//neste caso, não irá ocorrer o reject pois a mensagem retorna depois de 3 segundos
//mas em uma requisição no firebase por exemplo, se ocorrer uma queda na rede no momento da chamada, o mesmo irá ser rejeitado