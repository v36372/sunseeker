import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import matches from './matches'
import match from './match'
import team from './team'
import admin from './admin'

const rootReducer = combineReducers({
	matches,
	match,
	team,
	routing,
	admin,
});

export default rootReducer
