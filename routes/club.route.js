const mongoose = require("mongoose");
let router = require('express').Router();
const clubController = require('../controllers/club.controller');

// Set default API response
router.get('/test', clubController.test);
router.post('/newClub', clubController.addNewClub);
<<<<<<< HEAD
router.get('/getClubs', clubController.getClubs);
router.get('/getClubWithId/:clubId', clubController.getClubWithID);
router.put('/updateClub/:clubId', clubController.updateClub);
router.delete('/deleteClubId', clubController.deleteClub);
=======
router.get('/getClubs', clubController.getClubs)
router.get('/getClubWithId/:clubId', clubController.getClubWithID)
router.put('/updateClub', clubController.updateClub)
router.delete('/deleteClub', clubController.deleteClub)
>>>>>>> 3f4f2064610d48af8981865b44732d1250cf4f58

module.exports = router;
