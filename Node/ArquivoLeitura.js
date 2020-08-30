const fs = require('fs')

const caminho = __dirname + '/Arquivo.json'

// sincrono... //não recomendado pois na leitura de um arquivo grande pode travar o event loop
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono... //fazendo leitura assync passando callback quando o arquivo tiver sido carregado
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./Arquivo.json') //lê o arquivo json e converte para objeto
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => { //lendo o diretório e retornando todos os arquivos pertencentes ao mesmo, retorna um array
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})