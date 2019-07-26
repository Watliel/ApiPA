const mongoose = require('mongoose');
const TeamSchema = require('../models/equipe.model');

exports.addNewTeam = (req, res) => {                
    let newTeam = new TeamSchema({
        teamName: req.body.teamName,
        ville: req.body.ville,
        idClub: req.body.idClub,
        nbJoueur: req.body.nbJoueur,
    });

    newTeam.save((err, equipe) => {
        if(err){
            res.send(err);
        }    
        res.json(equipe);
    });
}


exports.getTeams = (req, res) => {           
    club.find({}, (err, equipe) => {
        if(err){
            res.send(err);
        }
        res.json(equipe);
    });
}

exports.getTeamWithID = (req, res) => {           
    club.findById(req.params.equipeId, (err, equipe) => {
        if(err){
            res.send(err);
        }
        res.json(equipe);
    });
}

exports.updateTeam = (req, res) => {           
    club.findOneAndUpdate({ _id: req.params.equipeId }, req.body, { new: true }, (err, equipe) => {
        if(err){
            res.send(err);
        }
        res.json(equipe);
    });
}

exports.deleteTeam = (req, res) => {           
    club.remove({ _id: req.params.teamId }, (err) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted team!'});
    });
}