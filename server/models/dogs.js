var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var DogSchema = new Schema({
    image: {
        type: String,
        required: true
    },

    dogId: {
        type: Number,
        required: true
    },
    
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

var Dog = mongoose.model("Dog", DogSchema);

module.exports = Dog; 