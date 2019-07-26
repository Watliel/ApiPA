let router = require('express').Router();
const observateurController = require('../controllers/observateur.controller');
// Set default API response

router.post('/newWatcher', observateurController.addNewWatcher);
router.get('/getWatchers', observateurController.getWatchers)
router.get('/getWatcherWithId', observateurController.getClubWithID)
router.put('/updateWatcher', observateurController.updateWatcher)
router.delete('/deleteWatcher', observateurController.deleteWatcher)

module.exports = router;