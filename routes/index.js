let router = require('express').Router();
const club = require('./club.route');
const coach = require('./coach.route');
const equipe = require('./equipe.route');
const joueur = require('./joueur.route');
const match = require('./match.route');
const observateur = require('./observateur.route');
const participation = require('./participation.route');
const place = require('./place.route');
const sport = require('./sport.route.js');
const statistique = require('./statistique.route');
const training = require('./training.route');
const trainingSolo = require('./trainingSolo.route');


router.use(club.route);
router.use(coach.route);
router.use(equipe.route);
router.use(joueur.route);
router.use(match.route);
router.use(observateur.route);
router.use(participation.route);
router.use(place.route);
router.use(sport.route);
router.use(statistique.route);
router.use(training.route);
router.use(trainingSolo.route);

module.exports = router;