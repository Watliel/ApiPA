const mongoose = require('mongoose');
const CoachSchema = require('../models/coach.model');

exports.addNewCoach = (req, res) => {                
    let newCoach = new CoachSchema({
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
    try {
        const coach = await CoachSchema.find();
        res.json(coach);
    } catch {
        res.send(err);
    }
}

exports.getCoachWithID = (req, res) => {           
    club.findById(req.params.coachId, (err, coach) => {
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