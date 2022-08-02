const express = require('express')
const routes = express.Router()
const controller = require('../controllers/controllerBovin')


routes.get('/', controller.bovins)
routes.get('/vendu', controller.laitVendu)
routes.get('/traite', controller.sommeTraite)
routes.get('/vaches', controller.getVacheEnvente)
routes.get('/taureaux', controller.getTaureaux)

module.exports = routes