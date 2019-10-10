const express =  require('express')
const app = express()

//rotas
const index = require('./routes/index')
const alunas = require('./routes/alunasRoute')

app.all('*', function(require, response,next){
    console.log('passamos pelo app.all')
    next()
})

app.use("/", index  )
app.use("/alunas", alunas)

module.exports = app