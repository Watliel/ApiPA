const mongoose = require('mongoose');
const ObservateurSchema = require('../models/observateur.model');

exports.addNewWatcher = (req, res) => {                
    let newObservateur = new ObservateurSchema({
        idJoueur: req.body.idJoueur,
        idMatch: req.body.idMatch,
        nbLicencier: req.body.nbLicencier,
        nbEquipe: req.body.nbEquipe,
        nomEquipe: req.body.nomEquipe
    });

    newObservateur.save((err, observateur) => {
        if(err){
            res.send(err);
        }    
        res.json(observateur);
    });
}


exports.getWatchers = (req, res) => {           
    observateur.find({}, (err, observateur) => {
        if(err){
            res.send(err);
        }
        res.json(observateur);
    });
}

exports.getWatcherWithID = (req, res) => {           
    observateur.findById(req.params.Id, (err, observateur) => {
        if(err){
            res.send(err);
        }
        res.json(observateur);
    });
}

exports.updateWatcher = (req, res) => {           
    club.findOneAndUpdate({ _id: req.params.joueurId }, req.body, { new: true }, (err, observateur) => {
        if(err){
            res.send(err);
        }
        res.json(observateur);
    });
}

exports.deleteWatcher = (req, res) => {           
    club.remove({ _id: req.params.joueurId }, (err) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted watcher!'});
    });
}