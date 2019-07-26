const mongoose = require('mongoose');
const ClubSchema = require('../models/participation.model');

exports.addNewParticipation = (req, res) => {                
    let newParticipation = new ParticipationSchema({
        idMatch: req.body.idMatch,
        idJoueur: req.body.idJoueur,
        idSport: req.body.idSport,
    });

    newParticipation.save((err, participation) => {
        if(err){
            res.send(err);
        }    
        res.json(participation);
    });
}


exports.getParticipations = (req, res) => {           
    club.find({}, (err, participation) => {
        if(err){
            res.send(err);
        }
        res.json(participation);
    });
}

exports.getParticipationWithID = (req, res) => {           
    club.findById(req.params.Id, (err, participation) => {
        if(err){
            res.send(err);
        }
        res.json(participation);
    });
}

exports.updateParticipation = (req, res) => {           
    club.findOneAndUpdate({ _id: req.params.participationId }, req.body, { new: true }, (err, participation) => {
        if(err){
            res.send(err);
        }
        res.json(participation);
    });
}

exports.deleteParticipation = (req, res) => {           
    club.remove({ _id: req.params.participationId }, (err) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted participation!'});
    });
}