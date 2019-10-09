const express = require('express')
const router = express.Router()
/*const alunas = require('../model/alunas.json')*/
const controller = require ('../controllers/alunasController')

router.get('/', controller.get)
/*router.get('/', function(request, response){
    response.status(200).send(alunas)
}) */ //tiramos pq o controller puxa isso agora
router.get ('/:id', controller.getById)
router.get ("/:id/books", controller.getBooks)

module.exports =  router