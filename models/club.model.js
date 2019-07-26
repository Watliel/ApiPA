const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClubSchema = new Schema({
  	nomClub: {
        type: String
    },
    ville: {
        type: String
    },
    idCoach: {
        type: Number
    },
    nbLicencier: {
        type: Number
    },
    nbEquipe: {
        type: Number
    },
    nomEquipe: {
        type: String
    }
   
});

module.exports = mongoose.model('Club', ClubSchema);