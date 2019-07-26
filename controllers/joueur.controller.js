const mongoose = require('mongoose');
const PlayerSchema = require('../models/joueur.model');

exports.addNewPlayer = (req, res) => {                
    let newPlayer = new PlayerSchema({
        nomJoueur: req.body.nomJoueur,
        teamName: req.body.teamName,
        idSport: req.body.idSport
    });

    newPlayer.save((err, joueur) => {
        if(err){
            res.send(err);
        }    
        res.json(joueur);
    });
}


exports.getPlayers = (req, res) => {           
    club.find({}, (err, joueur) => {
        if(err){
            res.send(err);
        }
        res.json(joueur);
    });
}

exports.getPlayerWithID = (req, res) => {           
    club.findById(req.params.joueurId, (err, joueur) => {
        if(err){
            res.send(err);
        }
        res.json(joueur);
    });
}

exports.updatePlayer = (req, res) => {           
    club.findOneAndUpdate({ _id: req.params.joueurId }, req.body, { new: true }, (err, joueur) => {
        if(err){
            res.send(err);
        }
        res.json(joueur);
    });
}

exports.deletePlayer = (req, res) => {           
    club.remove({ _id: req.params.joueurId }, (err) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted player !'});
    });
}