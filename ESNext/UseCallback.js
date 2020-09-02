// sem promise...
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => { //enquanto estiver retornando dados, incluir em resultado
            resultado += dados
        })

        res.on('end', () => { //após finalização retorna resltado convertido
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos => { //devido a grande repetição acaba não sendo interessando a utilização neste cenário
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})