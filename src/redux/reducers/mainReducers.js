
import { combineReducers } from 'redux'
import citiesReducers from './citiesReducers'
import itinerariesReducer from './itinerariesReducers'

const mainReducer = combineReducers({
    citiesReducers,
    itinerariesReducer
})

export default mainReducer