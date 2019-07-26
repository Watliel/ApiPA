const mongoose = require('mongoose');
const ClubSchema = require('../models/club.model');

exports.addNewClub = (req, res) => {                
    let newClub = new ClubSchema({
        nomClub: req.body.nomClub,
        ville: req.body.ville,
        idCoach: req.body.idCoach,
        nbLicencier: req.body.nbLicencier,
        nbEquipe: req.body.nbEquipe,
        nomEquipe: req.body.nomEquipe
    });

    newClub.save((err, club) => {
        if(err){
            res.send(err);
        }    
        res.json(club);
    });
}


exports.getClubs = (req, res) => {           
    club.find({}, (err, club) => {
        if(err){
            res.send(err);
        }
        res.json(club);
    });
}

exports.getClubWithID = (req, res) => {           
    club.findById(req.params.clubId, (err, club) => {
        if(err){
            res.send(err);
        }
        res.json(club);
    });
}

exports.updateClub = (req, res) => {           
    club.findOneAndUpdate({ _id: req.params.clubId }, req.body, { new: true }, (err, club) => {
        if(err){
            res.send(err);
        }
        res.json(club);
    });
}

exports.deleteClub = (req, res) => {           
    club.remove({ _id: req.params.clubId }, (err) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted club!'});
    });
}