//URL in Express: http://localhost:3003/produtos

const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'NOTEBOOK', preco: 1725.85}) //Converte para Json Automaticamente
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})