const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function () { // atributos {*/5} indica se será executado a cada 5 segundos, na hora 12 de terça feira = 2
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000) //depois de 20 segundos executando a tarefa1, o mesmo irá parar a execução. 

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] //de segunda a sexta
regra.hour = 12 //hora 12
regra.second = 30 //todo segundo 30
//criando onjeto com as configurações de execução

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})