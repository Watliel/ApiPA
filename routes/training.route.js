let router = require('express').Router();
const trainingController = require('../controllers/training.controller');
// Set default API response

router.post('/newTraining', trainingController.addNewTraining);
router.get('/getTrainings', trainingController.getTrainings)
router.get('/getTrainingWithId', trainingController.getTrainingWithID)
router.put('/updateTraining', trainingController.updateTraining)
router.delete('/deleteTraining', trainingController.deleteTraining)

module.exports = router;