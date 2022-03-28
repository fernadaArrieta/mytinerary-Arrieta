const Tinerary = require("../models/itinerarios");

const tineraryController = {
  obtenerItinerario: async (req, res) => {
    let itinerarios;
    let error = null;

    try {
      itinerarios = await Tinerary.find();
    } catch (err) {
      error = err;
      console.log(error);
    }
    res.json({
      response: error ? "ERROR" : { itinerarios },
      success: error ? false : true,
      error: error,
    });
  },
  cargarItinerario: async (req, res) => {
    
    const {
      city,
      userPhoto,
      userName,
      name,
      price,
      time,
      tags,
      description,
      comments,
    } = req.body.dataInput;
    new Tinerary({
      city: city,
      userPhoto: userPhoto,
      userName: userName,
      name: name,
      price: price,
      time: time,
      tags: tags,
      description: description,
      comments: comments,
    })
      .save()
      .then((respuesta) => res.json({ respuesta }));
  },
  borrarItinerario: async (req, res) => {
    const id = req.params.id;

    await Tinerary.findOneAndDelete({ _id: id });
  },
  modificarItinerario: async (req, res) => {
    const id = req.params.id;
    const itinerary = req.body.dataInput;

    let tinerarydb = await Tinerary.findOneAndUpdate({ _id: id }, itinerary);
    console.log(tinerarydb);
  },
  getItinerariosPorCiudad: async (req, res) => {
    const id = req.params.id;

    let tinerario;
    let error = null;

    try {
      tinerario = await Tinerary.find({ cityId: id });
    } catch (err) {
      error = err;
      console.log(error);
    }
    res.json({
      response: error ? "ERROR" : tinerario,
      success: error ? false : true,
      error: error,
    });
  },

  likeDislike:async (req,res) =>{


    const itineraryId= req.params.id
    const user= req.user._id

   console.log(id)
   console.log(user)
  
    await Tinerary.findOne({_id: itineraryId })

    .then((itinerarios)=>{
console.log(itinerarios)
if(itinerarios.likes.includes(user)){
  Tinerary.findOneAndUpdate({_id:id}, {$pull:{likes:user}}, {new: true})
  .then((response) => res.json({success:true, response:response.likes}))
  .catch((error) => console.log(error))
} else{
  Tinerary.findOneAndUpdate({_id:id}, {$push:{likes:user}}, {new: true})
  .then((response) => res.json({success:true, response:response.likes}))
  .catch((error) => console.log(error))
}
    })
  .catch((error)=>res.json({success:false, response:error})) 
 
  
},
}
module.exports = tineraryController
