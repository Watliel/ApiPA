const mongoose = require('mongoose');
const PlaceSchema = require('../models/place.model');

exports.addNewPlace = (req, res) => {                
    let newClub = new PlaceSchema({
        idPlace: req.body.idPlace,
        ville: req.body.ville,
        idSport: req.body.idSport,
    });

    newClub.save((err, place) => {
        if(err){
            res.send(err);
        }    
        res.json(place);
    });
}


exports.getPlaces = (req, res) => {           
    club.find({}, (err, place) => {
        if(err){
            res.send(err);
        }
        res.json(place);
    });
}

exports.getPlaceWithID = (req, res) => {           
    club.findById(req.params.placeId, (err, place) => {
        if(err){
            res.send(err);
        }
        res.json(place);
    });
}

exports.updatePlace = (req, res) => {           
    club.findOneAndUpdate({ _id: req.params.placeId }, req.body, { new: true }, (err, place) => {
        if(err){
            res.send(err);
        }
        res.json(place);
    });
}

exports.deletePlace = (req, res) => {           
    club.remove({ _id: req.params.placeId }, (err) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'Successfully deleted place!'});
    });
}