
var mongoose = require('mongoose');

/* var Schema = mongoose.Schema; */

const itinerarySchema = new mongoose.Schema({
    
    city: {type:String,required:true},
    userPhoto: {type:String,required:true},
    username: {type:String,required:true},
    name: {type:String,required:true},
    price:{type:String,required:true},   
    time:{type:Number,required:true},   
    tags:{type:Array, required:true},
    description:{type:String,required:true},    
    comments: {type:Array,required:true},
    cityId: { type: mongoose.Schema.Types.ObjectId, ref: "cities" }
    
});

var Tinerary = mongoose.model('tineraries', itinerarySchema);

module.exports = Tinerary;