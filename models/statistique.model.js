const mongoose = require('mongoose');
const StatistiqueSchema = mongoose.Schema;

export const StatistiqueSchema = new Schema({
    idJoueur: {
        type: Number,
    },
  	but: {
        type: Number            
    },
    tirTotal: {
        type: Number            
    },
    faute: {
        type: Number            
    },
    carton: {
        type: Number            
    },
  	arretDeBut: {
        type: Number            
    },
    idMatch: {
        type: Number            
    }
});
module.exports = mongoose.model('Statistique', StatistiqueSchema);