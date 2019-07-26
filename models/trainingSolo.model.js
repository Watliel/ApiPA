const mongoose = require('mongoose');
const TrainingSoloSchema = mongoose.Schema;

export const TrainingSoloSchema = new Schema({

  	idSport: {
        type: Number
    },
        idJoueurReferent: {
        type: Number
    },
        idPlace:{
        type: Number
    }
});
module.exports = mongoose.model('TrainingSolo', TrainingSoloSchema);