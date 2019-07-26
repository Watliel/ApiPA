let router = require('express').Router();
const trainingSoloController = require('../controllers/trainingSolo.controller');
// Set default API response

router.post('/newClub', trainingSoloController.addNewTraining);
router.get('/getTrainingSolo', trainingSoloController.getTrainingSolos)
router.get('/getTrainingSoloWithId', trainingSoloController.getTrainingSoloWithID)
router.put('/updateTrainingSolo', trainingSoloController.updateTrainingSolo)
router.delete('/deleteTrainingSolo', trainingSoloController.deleteTrainingSolo)

module.exports = router;