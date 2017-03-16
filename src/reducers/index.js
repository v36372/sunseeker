import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import {
    REQUEST_MATCHES, RECEIVE_MATCHES
} from '../actions'

const matches = (state = {
    isFetching: false,
    listMatches: []
}, action) => {
    switch (action.type) {
        case REQUEST_MATCHES:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_MATCHES:
            return {
                ...state,
                isFetching: false,
                listMatches: action.listMatches,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
}

const rootReducer = combineReducers({
    matches,
    routing
});

export default rootReducer
