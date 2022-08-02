const express = require('express')
const routes = express.Router()
const controller = require('../controllers/controllerCommande')


routes.post('/:email', controller.passercommandeLait)
routes.get('/h/:email', controller.getCommandeLaitEncours)
routes.get('/all/:email', controller.allCommandeLait)
routes.get('/b/:email', controller.allCommandeBovin)
routes.delete('/:email/:id', controller.supprimercommandeLait)
routes.delete('/supprimer/:email/:id', controller.supprimerPanier)
routes.post('/ajouterpanier/:email/', controller.ajouterPanier)
routes.post('/valider/:email/', controller.commanderBovin)
routes.get('/panier/:email/', controller.getPanier)

module.exports = routes