let router = require('express').Router();
const participationController = require('../controllers/participation.controller');
// Set default API response

router.post('/newClub', participationController.addNewParticipation);
router.get('/getClubs', participationController.getParticipations)
router.get('/getClubWithId', participationController.getParticipationWithID)
router.put('/updateCLub', participationController.updateParticipation)
router.delete('/deleteClub', participationController.deleteParticipation)

module.exports = router;