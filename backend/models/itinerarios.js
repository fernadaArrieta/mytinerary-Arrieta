const { DoNotDisturbOnTotalSilenceRounded } = require('@mui/icons-material');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var itinerarySchema = new Schema({
    
    city: String,
    userPhoto: String,
    username: String,
    name:String,
    price: String,   
    time: Number,   
    tags: Array,
    description: String,    
    comments: Array,
    
});

var tinerary = mongoose.model('tineraries', itinerarySchema);

module.exports = tinerary;