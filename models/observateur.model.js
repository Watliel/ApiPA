const mongoose = require('mongoose');
const ObservateurSchema = mongoose.Schema;

export const ObservateurSchema = new Schema({
    idJoueur: {
        type: String,
    },
  	idMatch: {
        type: Number            
    },
    idEntrainement: {
        type: Number            
    },
    idSport: {
        type: Number
    }
});
module.exports = mongoose.model('observateur', ObservateurSchema);