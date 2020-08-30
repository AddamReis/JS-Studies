// console.log(global)
global.MinhaApp = Object.freeze({ //o freeze deixa o objeto imutável 
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})