const mongoose = require('mongoose');
const CoachSchema = mongoose.Schema;

export const CoachSchema = new Schema({
    idClub: {
        type: Number,
    },
  	nom: {
        type: String
    },
        ville: {
        type: String
    }
   
});

module.exports = mongoose.model('Coach', CoachSchema);