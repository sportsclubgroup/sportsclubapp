const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const MsgSchema = new Schema({
    message: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
});
module.exports = Msg = mongoose.model('message', MsgSchema);