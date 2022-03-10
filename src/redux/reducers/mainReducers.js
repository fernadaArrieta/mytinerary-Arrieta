
import { combineReducers } from 'redux'
import citiesReducers from './citiesReducers'
import itinerariesReducers from './itinerariesReducers'

const mainReducer = combineReducers({
    citiesReducers,
    //itinerariesReducers
})

export default mainReducer