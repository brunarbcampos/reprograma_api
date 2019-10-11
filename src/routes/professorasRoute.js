const express = require('express')
const router = express.Router()
/*const alunas = require('../model/alunas.json')*/
const controller = require ('../controllers/professorasController')

router.get('/', controller.get)

module.exports =  router