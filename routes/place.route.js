let router = require('express').Router();
const placeController = require('../controllers/place.controller');
// Set default API response

router.post('/newPlace', placeController.addNewPlace);
router.get('/getPlaces', placeController.getPlaces)
router.get('/getPlaceWithId', placeController.getPlaceWithID)
router.put('/updatePlace', placeController.updatePlace)
router.delete('/deletePlace', placeController.deletePlace)

module.exports = router;