
import { combineReducers } from 'redux'
import citiesReducers from './citiesReducers'
import itinerariesReducer from './itinerariesReducers'
import userReducer from './usersReducers'

const mainReducer = combineReducers({
    citiesReducers,
    itinerariesReducer,
    userReducer,
})

export default mainReducer