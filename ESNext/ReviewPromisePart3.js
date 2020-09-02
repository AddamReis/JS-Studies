function gerarNumerosEntre(min, max) {
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min //gerando valor aleatório de acordo com os parametros passados
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`) //encadeando chamada das funções
    .then(console.log)