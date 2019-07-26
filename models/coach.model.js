//   /lib/models/crmModel.tsimport * as mongoose from 'mongoose';

const CoachSchema = mongoose.Schema;

export const CoachSchema = new Schema({
    idClub: {
        type: Number,
    },
  	nom: {
        type: String
    },
        ville: {
        type: String
    }
   
});