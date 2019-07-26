let router = require('express').Router();
const trainingController = require('../controllers/training.controller');
// Set default API response

router.post('/newClub', trainingController.addNewTraining);
router.get('/getClubs', trainingController.getTrainings)
router.get('/getClubWithId', trainingController.getTrainingWithID)
router.put('/updateClub', trainingController.updateTraining)
router.delete('/deleteClub', trainingController.deleteTraining)

module.exports = router;