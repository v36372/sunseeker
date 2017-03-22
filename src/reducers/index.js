import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import matches from './matches'
import match from './match'
import team from './team'

const rootReducer = combineReducers({
    matches,
    match,
    team,
    routing
});

export default rootReducer
