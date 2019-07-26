let router = require('express').Router();
const joueurController = require('../controllers/joueur.controller');
// Set default API response

router.post('/newPlayer', joueurController.addNewPlayer);
router.get('/getPlayers', joueurController.getPlayers)
router.get('/getPlayerwithId', joueurController.getPlayerWithID)
router.put('/updatePlayer', joueurController.updatePlayer)
router.delete('/deleteJoueur', joueurController.deletePlayer)

module.exports = router;