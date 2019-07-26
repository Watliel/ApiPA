const mongoose = require('mongoose');
const SportSchema = require('../models/sport.model');

exports.addNewSport = (req, res) => {                
    let newSport = new SportSchema({
        nomSport: req.body.nomSport,
        nbSport: req.body.nbSport,
    });

    newSport.save((err, sport) => {
        if(err){
            res.send(err);
        }    
        res.json(sport);
    });
}


exports.getSports = (req, res) => {           
    club.find({}, (err, sport) => {
        if(err){
            res.send(err);
        }
        res.json(sport);
    });
}

exports.getSportWithID = (req, res) => {           
    club.findById(req.params.sportId, (err, sport) => {
        if(err){
            res.send(err);
        }
        res.json(sport);
    });
}

exports.updateSport = (req, res) => {           
    club.findOneAndUpdate({ _id: req.params.clubId }, req.body, { new: true }, (err, sport) => {
        if(err){
            res.send(err);
        }
        res.json(sport);
    });
}

exports.deleteSport = (req, res) => {           
    club.remove({ _id: req.params.sportId }, (err) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted sport !'});
    });
}