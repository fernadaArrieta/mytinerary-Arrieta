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

    },
    cargarCiudad: async(req,res)=>{
        console.log(req.body)
        const {ciudad, pais, imagen} = req.body.dataInput
        new Ciudades({nombre:ciudad, 
                     pais:pais,
                     imagen: imagen}).save()
            .then((respuesta) => res.json({respuesta}))
    },
    borrarCiudad: async (req,res)=>{
        const id = req.params.id
        

           await Ciudades.findOneAndDelete({_id:id})

    },
    modificarCiudad: async (req, res)=>{
        const id = req.params.id
        const ciudad = req.body.dataInput

        let ciudadb = await Ciudades.findOneAndUpdate({_id:id}, ciudad)
         console.log(ciudadb)

    },

    obtenerUnaCiudad: async(req, res)=>{
        const id = req.params.id

        let ciudad
        let error = null

        try{
            ciudad = await Ciudades.findOne({_id:id})
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {ciudad}, 
            success: error ? false : true,
            error: error
        })  
    }

}
   
module.exports = ciudadesController