const express = require('express')
const routes = express.Router()
const controller = require('../controllers/controllerUtilisateur')

routes.post('/', controller.inscrire)
routes.post('/login', controller.login)
routes.get('/', controller.allClient)
routes.get('/:id', controller.oneCient)
routes.put('/:id', controller.updateUtilisateur)
routes.post('/modifierMp/:email', controller.modifierMp)
//routes.get('/', controller.bovins)

module.exports = routes