const mongoose = require('mongoose');
const ParticipationtSchema = mongoose.Schema;

export const ParticipationtSchema = new Schema({
    idMatch: {
        type: Number,
    },
  	idJoueur: {
        type: Number
    },
        idSport: {
        type: Number
    }  
});
module.exports = mongoose.model('Participation', ParticiopationSchema);