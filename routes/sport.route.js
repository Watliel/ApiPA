let router = require('express').Router();
const sportController = require('../controllers/sport.controller');
// Set default API response

router.post('/newSport', sportController.addNewSport);
router.get('/getSports', sportController.getSports)
router.get('/getSportWithId', sportController.getSportWithID)
router.put('/updateSport', sportController.updateSport)
router.delete('/deleteSport', sportController.deleteSport)

module.exports = router;