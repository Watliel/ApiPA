
const PlayerSchema = mongoose.Schema;

export const PlayerSchema = new Schema({
    nomJoueur: {
        type: String,
    },
    teamName: {
        type: String            
    },
    idSport: {
        type: Number            
    }
});
module.exports = mongoose.model('Joueur', PlayerSchema);