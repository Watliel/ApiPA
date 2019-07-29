const mongoose = require("mongoose");
let router = require('express').Router();
const clubController = require('../controllers/club.controller');

// Set default API response
router.get('/test', clubController.test);
router.post('/newClub', clubController.addNewClub);
router.get('/getClubs', clubController.getClubs);
router.get('/getClubWithId/:clubId', clubController.getClubWithID);
router.put('/updateClub/:clubId', clubController.updateClub);
router.delete('/deleteClubId', clubController.deleteClub);

module.exports = router;