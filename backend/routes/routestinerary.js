const Router = require('express').Router()
const validator = require('../config/validator')
const passport = require('../config/passport')

const tineraryController = require('../controllers/itinerariosControllers')
const {obtenerItinerario, cargarItinerario, borrarItinerario, modificarItinerario, getItinerariosPorCiudad,getOneitinerario, likeDislike} = tineraryController

const commentsControllers= require('../controllers/commentsControllers')
const {addComment, modifyComment,deleteComment}= commentsControllers
const activityControllers = require('../controllers/activityControllers')
const {addActivity, activityOfItinerary} =activityControllers

//ITINERARIOS
Router.route('/tineraries')
.get(obtenerItinerario)
.post(cargarItinerario)

Router.route('/tineraries/:id')
.delete(borrarItinerario)
.put(modificarItinerario)
.get(getItinerariosPorCiudad)

Router.route('/tinerary/:id')
.get(getOneitinerario)
//LIKES
Router.route("/tineraries/likeDislike/:id")
.put(passport.authenticate("jwt", {session:false}), likeDislike)

//COMMENTS
Router.route('/tineraries/comment')
.post(passport.authenticate('jwt',{ session: false }),addComment)

Router.route('/tineraries/comment/:id')
.post(passport.authenticate('jwt',{ session: false }),deleteComment)
.put(passport.authenticate('jwt',{ session: false }),modifyComment)

// ACTIVITIES
Router.route("/tineraries/activities")
  .post(addActivity)


Router.route('/tineraries/activities/:itineraryId')
.get(activityOfItinerary)

module.exports = Router