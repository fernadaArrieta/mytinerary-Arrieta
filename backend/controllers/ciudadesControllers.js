const Ciudades = require('../models/ciudades')

const ciudadesController = {

    obtenerCiudades: async (req, res)=>{
        let ciudades
        let error = null

        try{
            ciudades = await Ciudades.find()
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {ciudades}, 
            success: error ? false : true,
            error: error
        })

    }}
   
module.exports = ciudadesController