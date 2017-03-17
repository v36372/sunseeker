import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import matches from './matches'
import team from './team'

const rootReducer = combineReducers({
    matches,
    team,
    routing
});

export default rootReducer
