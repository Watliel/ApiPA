let router = require('express').Router();
const clubController = require('../controllers/club.controller');
// Set default API response

router.post('/newClub', clubController.addNewClub);
router.get('/getClubs', clubController.getClubs)
router.get('/getClubWithId/:clubId', clubController.getClubWithID)
router.put('/updateClub', clubController.updateClub)
router.delete('/deleteClub', clubController.deleteClub)

module.exports = router;
