const SportSchema = mongoose.Schema;

export const SportSchema = new Schema({
    nomSport: {
        type: String,
    },
    nbSport: {
        type: Number
    }
 
});