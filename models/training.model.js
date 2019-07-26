const mongoose = require('mongoose');
const TrainingSchema = mongoose.Schema;

export const TrainingSchema = new Schema({

  	idEquipe1: {
        type: Number
    },
        idEquipe2: {
        type: Number
    },
        butE1: {
        type: Number
    },
        butE2: {
        type: Number
    },
        lieu:{
        type: String
    }

   
});
module.exports = mongoose.model('Training', TrainingSchema);