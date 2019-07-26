let router = require('express').Router();
const placeController = require('../controllers/place.controller');
// Set default API response

router.post('/newClub', placeController.addNewPlace);
router.get('/getClubs', placeController.getPlaces)
router.get('/getClubWithId', placeController.getPlaceWithID)
router.put('/updateCLub', placeController.updatePlace)
router.delete('/deleteClub', placeController.deletePlace)

module.exports = router;