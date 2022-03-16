const Router = require('express').Router()

const usersControllers = require('../controllers/userscontroller');
const {signUpUsers, signInUser, signOutUser}= usersControllers

Router.route('/auth/signup')
.post(signUpUsers)

Router.route('/auth/signin')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

module.exports = Router