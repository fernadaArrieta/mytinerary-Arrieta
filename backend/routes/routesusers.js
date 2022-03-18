const Router = require('express').Router()
const validator = require('../config/validator')

const usersControllers = require('../controllers/userscontroller');
const {signUpUsers, signInUser, signOutUser,verifyEmail, verificarToken}= usersControllers
const passport = require('../config/passport')

Router.route('/auth/signup')
.post(validator,signUpUsers)

Router.route('/auth/signin')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/verify/:uniqueString')
.get(verifyEmail) 

Router.route('/auth/signInToken')
.get(passport.authenticate('jwt',{ session:false }), verificarToken)

module.exports = Router