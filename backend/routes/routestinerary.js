const Router = require('express').Router()

const { obtenerUnItinerario } = require('../controllers/itinerariosControllers')
const tineraryController = require('../controllers/itinerariosControllers')

const {obtenerItinerario, cargarItinerario, borrarItinerario, modificarItinerario} = tineraryController

Router.route('/tineraries')
.get(obtenerItinerario)
.post(cargarItinerario)

Router.route('/tineraries/:id')
.delete(borrarItinerario)
.put(modificarItinerario)
.get(obtenerUnItinerario)



module.exports = Router