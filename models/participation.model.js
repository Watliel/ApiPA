const ParticipationtSchema = mongoose.Schema;

export const ParticipationtSchema = new Schema({
    idMatch: {
        type: Number,
        //required: 'Enter a first name'
    },
  	idJoueur: {
        type: Number
    },
        idSport: {
        type: Number
    }  
});