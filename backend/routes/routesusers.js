const Router = require('express').Router()
const validator = require('../config/validator')

const usersControllers = require('../controllers/userscontroller');
const {signUpUsers, signInUser, signOutUser,verifyEmail}= usersControllers


Router.route('/auth/signup')
.post(validator,signUpUsers)

Router.route('/auth/signin')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

Router.route('/verify/:uniqueString')
.get(verifyEmail) 

module.exports = Router