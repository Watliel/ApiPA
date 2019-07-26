const mongoose = require('mongoose');
const MatchSchema = require('../models/match.model');

exports.addNewMatch = (req, res) => {                
    let newMatch = new MatchSchema({
        idEquipe1: req.body.idEquipe1,
        idEquipe2: req.body.ville,
        butE1: req.body.idCoach,
        butE2: req.body.nbLicencier,
        idLieu: req.body.idLieu,
        idSport: req.body.idSport
    });

    newMatch.save((err, match) => {
        if(err){
            res.send(err);
        }    
        res.json(match);
    });
}


exports.getMatchs = (req, res) => {           
    club.find({}, (err, match) => {
        if(err){
            res.send(err);
        }
        res.json(match);
    });
}

exports.getMatchWithID = (req, res) => {           
    club.findById(req.params.matchId, (err, match) => {
        if(err){
            res.send(err);
        }
        res.json(match);
    });
}

exports.updateMatch = (req, res) => {           
    club.findOneAndUpdate({ _id: req.params.clubId }, req.body, { new: true }, (err, match) => {
        if(err){
            res.send(err);
        }
        res.json(match);
    });
}

exports.deleteMatch = (req, res) => {           
    club.remove({ _id: req.params.clubId }, (err) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted match!'});
    });
}