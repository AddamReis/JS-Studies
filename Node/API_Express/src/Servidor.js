//URL in Postman: http://localhost:3003/produtos
const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./BancoDeDados')

app.use(bodyParser.urlencoded({ extended: true })) //este middleware é responsável por fazer um parse nas informações e transformar em objeto

app.get('/produtos', (req, res/*, next*/) => { //todos produtos cadastrados
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => { //retorna apenas o produto pertencente ao ID
    res.send(bancoDeDados.getProduto(req.params.id))//os parametros vem na requisição
})

app.post('/produtos', (req, res, next) => { //salvar os proutos
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, //pega os dados a partir do corpo da requisição
        preco: req.body.preco
    })
    res.send(produto) // JSON //retornando a resposta
})

app.put('/produtos/:id', (req, res, next) => { //update pelo ID
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => { //delete passando ID
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})
