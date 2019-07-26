let router = require('express').Router();
const matchController = require('../controllers/match.controller');
// Set default API response

router.post('/newMatch', matchController.addNewMatch);
router.get('/getMatchs', matchController.getMatchs);
router.get('/getMatchWithId', matchController.getMatchWithID);
router.put('/updateMatch', matchController.updateMatch)
router.delete('/deleteMatch', matchController.deleteMatch)

module.exports = router;