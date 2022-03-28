const Router = require('express').Router()

const { getItinerariosPorCiudad, likeDislike } = require('../controllers/itinerariosControllers')
const tineraryController = require('../controllers/itinerariosControllers')
const {obtenerItinerario, cargarItinerario, borrarItinerario, modificarItinerario} = tineraryController
const passport = require('../config/passport')
const commentsControllers= require('../controllers/commentsControllers')
const {addComment, modifiComment,deleteComment}= commentsControllers
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

//LIKES
Router.route("/tineraries/likeDislike/:id")
.put(passport.authenticate("jwt", {session:false}), likeDislike)

//COMMENTS
Router.route('/tineraries/comment')
.post(passport.authenticate('jwt',{ session: false }),addComment)
.put(passport.authenticate('jwt',{ session: false }),modifiComment)

Router.route('/tineraries/comment/:id')
.post(passport.authenticate('jwt',{ session: false }),deleteComment)

// ACTIVITIES
Router.route("/activities")
  .post(addActivity)


Router.route('/activities/:itineraryId')
.get(activityOfItinerary)

module.exports = Router