const mongoose = require('mongoose');
const TeamSchema = mongoose.Schema;

export const TeamSchema = new Schema({
    teamName: {
        type: String,
    },
  	nbJoueur: {
        type: Number,            
    },
    idClub: {
        type: Number,           
    },
    ville: {
        type: String,
    }
   
});
module.exports = mongoose.model('Team', TeamSchema);