//   /lib/models/crmModel.tsimport * as mongoose from 'mongoose';

const MatchSchema = mongoose.Schema;

export const MatchSchema = new Schema({

  	idEquipe1: {
        type: Number
    },
    idEquipe2: {
        type: Number
    },
    butE1: {
        type: Number
    },
    butE2: {
        type: Number
    },
    idLieu:{
        type: Number
    },
    idSport:{
            type: Number
        }

   
});