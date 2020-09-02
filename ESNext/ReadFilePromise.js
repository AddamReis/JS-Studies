const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) { //lendo conteúdo do arquivo
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'Dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split(`\n`))
    .then(linhas => linhas.join(`,`))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)