const Router = require('express').Router()

const { obtenerUnaCiudad } = require('../controllers/ciudadesControllers')
const ciudadesController = require('../controllers/ciudadesControllers')

const {obtenerCiudades, cargarCiudad, borrarCiudad, modificarCiudad} = ciudadesController

Router.route('/cities')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/ciudades/:id')
.delete(borrarCiudad)
.put(modificarCiudad)
.get(obtenerUnaCiudad)



module.exports = Router