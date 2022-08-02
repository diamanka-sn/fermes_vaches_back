const express = require('express')
const routes = express.Router()
const controller = require('../controllers/controllerRace')


routes.get('/', controller.races)
routes.post('/', controller.enregistrer)

module.exports = routes