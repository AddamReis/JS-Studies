function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            //con.log('temp') //ao ocorrer o erro, o reject do catch irá procurar o primeiro tratamento, neste caso dentro do then da chamada.
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5) //chance de 50% de dar certo
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v), //primeiro parametro é caso dê certo e o segundo caso ocorra erro
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))