let router = require('express').Router();
const coachController = require('../controllers/coach.controller');
// Set default API response

router.post('/newClub', coachController.addNewCoach);
router.get('/getCoachs', coachController.getCoachs)
router.get('/getCoachWithId', coachController.getCoachWithID)
router.put('/updateCoach', coachController.updateCoach)
router.delete('/deleteCoach', coachController.deleteCoach)

module.exports = router;