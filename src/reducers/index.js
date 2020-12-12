import {combineReducers} from 'redux'
const weatherReducer = (state=[],action)=>{
    switch (action.type){
        case 'FETCH_WEATHER':
            return [action.payload.data,...state]
        default:
            return state
    } 
}

export default combineReducers({
    weather:weatherReducer
})
