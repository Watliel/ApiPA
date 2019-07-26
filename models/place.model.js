const PlaceSchema = mongoose.Schema;

export const PlaceSchema = new Schema({
    idClub: {
        type: Number,
    },
  	placeName: {
        type: String
    },
    ville: {
        type: String
    },
    idSport: {
        type: Number
    }  
});