const Itinerary = require('../models/itinerarios')

const tineraryController = {

    obtenerItinerario: async (req, res)=>{
        let itinerarios
        let error = null

        try{
            itinerarios = await Itinerary.find()
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {itinerarios}, 
            success: error ? false : true,
            error: error
        })

    },
    cargarItinerario: async(req,res)=>{
        console.log(req.body)
        const {city, userPhoto, userName,name, price, time, tags, description, comments} = req.body.dataInput
        new Itinerary({city:city, 
                     userPhoto:userPhoto,
                     userName: userName,
                     name:name,
                     price:price,
                     time:time,
                     tags:tags,
                     description: description,
                    comments:comments}).save()
            .then((respuesta) => res.json({respuesta}))
    },
    borrarItinerario: async (req,res)=>{
        const id = req.params.id
        

           await Itinerary.findOneAndDelete({_id:id})

    },
    modificarItinerario: async (req, res)=>{
        const id = req.params.id
        const itineray = req.body.dataInput

        let tinerarydb = await Itinerary.findOneAndUpdate({_id:id}, itinerary)
         console.log(tinerarydb)

    },
    obtenerUnItinerario: async(req, res)=>{
        const id = req.params.id

        let tinerario
        let error = null

        try{
            tinerario = await Itinerary.findOne({_id:id})
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {tinerario}, 
            success: error ? false : true,
            error: error
        })  
    }


}
   
module.exports = tineraryController

