const mongoose = require('mongoose');
const StatistiqueSchema = require('../models/statistique.model');

exports.addNewStatistique = (req, res) => {                
    let newStatistique = new StatistiqueSchema({
        idJoueur: req.body.idJoueur,
        but: req.body.but,
        tirTotal: req.body.tirTotal,
        faute: req.body.faute,
        carton: req.body.carton,
        arretdeBut: req.body.arretdeBut,
        idMatch: req.body.idMatch
    });

    newStatistique.save((err, statistique) => {
        if(err){
            res.send(err);
        }    
        res.json(statistique);
    });
}


exports.getStatistiques = (req, res) => {           
    club.find({}, (err, statistique) => {
        if(err){
            res.send(err);
        }
        res.json(statistique);
    });
}

exports.getStatistiqueWithID = (req, res) => {           
    club.findById(req.params.statistiqueId, (err, statistique) => {
        if(err){
            res.send(err);
        }
        res.json(statistique);
    });
}

exports.updateStatistique = (req, res) => {           
    club.findOneAndUpdate({ _id: req.params.statistiqueId }, req.body, { new: true }, (err, statistique) => {
        if(err){
            res.send(err);
        }
        res.json(statistique);
    });
}

exports.deleteStatistique = (req, res) => {           
    club.remove({ _id: req.params.statistiqueId }, (err) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted statistic !'});
    });
}