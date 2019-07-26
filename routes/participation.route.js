let router = require('express').Router();
const participationController = require('../controllers/participation.controller');
// Set default API response

router.post('/newParticipation', participationController.addNewParticipation);
router.get('/getParticipations', participationController.getParticipations)
router.get('/getParticipationWithId', participationController.getParticipationWithID)
router.put('/updateParticipation', participationController.updateParticipation)
router.delete('/deleteParticipaion', participationController.deleteParticipation)

module.exports = router;