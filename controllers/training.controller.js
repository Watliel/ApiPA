const mongoose = require('mongoose');
const TrainingSchema = require('../models/training.model');

exports.addNewTraining = (req, res) => {                
    let newTraining = new TrainingSchema({
        idEquipe1: req.body.idEquipe1,
        idEquipe2: req.body.idEquipe2,
        butE1: req.body.butE1,
        butE2: req.body.butE2,
        place: req.body.place,
    });

    newClub.save((err, training) => {
        if(err){
            res.send(err);
        }    
        res.json(training);
    });
}


exports.getTrainings = (req, res) => {           
    club.find({}, (err, training) => {
        if(err){
            res.send(err);
        }
        res.json(training);
    });
}

exports.getTrainingWithID = (req, res) => {           
    club.findById(req.params.clubId, (err, training) => {
        if(err){
            res.send(err);
        }
        res.json(training);
    });
}

exports.updateTraining = (req, res) => {           
    club.findOneAndUpdate({ _id: req.params.trainingId }, req.body, { new: true }, (err, training) => {
        if(err){
            res.send(err);
        }
        res.json(training);
    });
}

exports.deleteTraining = (req, res) => {           
    club.remove({ _id: req.params.trainingId }, (err) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted training !'});
    });
}