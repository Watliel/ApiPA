const mongoose = require('mongoose');
const ClubSchema = require('../models/coach.model');

exports.addNewCoach = (req, res) => {                
    let newCoach = new ClubSchema({
        nomCoach: req.body.nomCoach,
        idClub: req.body.idClub,
        ville: req.body.ville
    });

    newCoach.save((err, coach) => {
        if(err){
            res.send(err);
        }    
        res.json(coach);
    });
}


exports.getCoachs = (req, res) => {           
    club.find({}, (err, coach) => {
        if(err){
            res.send(err);
        }
        res.json(coach);
    });
}

exports.getCoachWithID = (req, res) => {           
    club.findById(req.params.clubId, (err, coach) => {
        if(err){
            res.send(err);
        }
        res.json(coach);
    });
}

exports.updateCoach = (req, res) => {           
    club.findOneAndUpdate({ _id: req.params.coachId }, req.body, { new: true }, (err, coach) => {
        if(err){
            res.send(err);
        }
        res.json(coach);
    });
}

exports.deleteCoach = (req, res) => {           
    club.remove({ _id: req.params.coachId }, (err) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted coach!'});
    });
}