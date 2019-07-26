const mongoose = require('mongoose');
const TrainingSoloSchema = require('../models/trainingsolo.model');

exports.addNewTrainingSolo = (req, res) => {                
    let newClub = new TrainingSoloSchema({
        idSport: req.body.idSport,
        idJoueurReferent: req.body.idJoueurReferent,
        idPlace: req.body.idPlace
    });

    newTraining.save((err, trainingSolo) => {
        if(err){
            res.send(err);
        }    
        res.json(trainingSolo);
    });
}


exports.getTrainingSolos = (req, res) => {           
    club.find({}, (err, trainingSolo) => {
        if(err){
            res.send(err);
        }
        res.json(trainingSolo);
    });
}

exports.getTrainingSoloWithID = (req, res) => {           
    club.findById(req.params.trainingSoloId, (err, trainingSolo) => {
        if(err){
            res.send(err);
        }
        res.json(trainingSolo);
    });
}

exports.updateTrainingSolo = (req, res) => {           
    club.findOneAndUpdate({ _id: req.params.trainingSoloId }, req.body, { new: true }, (err, trainingSolo) => {
        if(err){
            res.send(err);
        }
        res.json(trainingSolo);
    });
}

exports.deleteTrainingSolo = (req, res) => {           
    club.remove({ _id: req.params.trainingSoloId }, (err) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted training solo !'});
    });
}