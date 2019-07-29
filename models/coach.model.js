const mongoose = require('mongoose');
const CoachSchema = mongoose.Schema;

 const CoachSchema = new Schema({
    idClub: {
        type: Number,
    },
  	nomCoach: {
        type: String
    },
    ville: {
        type: String
    }
   
});

module.exports = mongoose.model('Coach', CoachSchema);