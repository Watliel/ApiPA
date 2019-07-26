const mongoose = require('mongoose');
const SportSchema = mongoose.Schema;

export const SportSchema = new Schema({
    nomSport: {
        type: String,
    },
    nbSport: {
        type: Number
    }
 
});
module.exports = mongoose.model('Sport', SportSchema);