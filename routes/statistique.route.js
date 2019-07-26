let router = require('express').Router();
const statistiqueController = require('../controllers/statistique.controller');
// Set default API response

router.post('/newStatistique', statistiqueController.addNewStatistique);
router.get('/getStatistiques', statistiqueController.getStatistiques)
router.get('/getStatistiqueWithId', statistiqueController.getStatistiqueWithID)
router.put('/updateStatistique', statistiqueController.updateStatistique)
router.delete('/deleteStatistique', statistiqueController.deleteStatistique)

module.exports = router;