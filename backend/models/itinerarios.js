
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
    comments:[{
        comment:{type:String},
        userId:{type:mongoose.Types.ObjectId, ref:"users"}
    }] ,
    cityId: { type: mongoose.Schema.Types.ObjectId, ref: "cities" },
    likes: {type:Array},
    
});

var Tinerary = mongoose.model('tineraries', itinerarySchema);

module.exports = Tinerary;