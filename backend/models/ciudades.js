const mongoose = require('mongoose')

const ciudadesSchema= new mongoose.Schema({
    nombre:{type: String,required:true},
    pais:{type:String,required:true},
    imagen:{type: String,required:true}
})
const Ciudades= mongoose.model('cities', ciudadesSchema)

module.exports=Ciudades

