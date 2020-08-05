const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
    name:{
        type: String,
    },
    matches:{
        type: Number,
    },
});
module.exports= User = mongoose.model('profile', ProfileSchema);