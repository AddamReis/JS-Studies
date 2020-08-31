const fs = require('fs') ///File System

const produto = {
    nome: 'Celular',
    preco: 1049.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/ArquivoGerado.json', JSON.stringify(produto), err => { //se o arquivo não existir, o mesmo é criado
    console.log(err || 'Arquivo salvo!')
})