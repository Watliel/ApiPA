let router = require('express').Router();
const equipeController = require('../controllers/equipe.controller');
// Set default API response

router.post('/newTeam', equipeController.addNewTeam);
router.get('/getTeams', equipeController.getTeams);
router.get('/getTeamWithId', equipeController.getTeamWithID)
router.put('/updateTeam', equipeController.updateTeam)
router.delete('/deleteTeam', equipeController.deleteTeam)

module.exports = router;