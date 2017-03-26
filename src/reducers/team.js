import {
    REQUEST_TEAM, RECEIVE_TEAM,
    REQUEST_HISTORY, RECEIVE_HISTORY
} from '../actions'

const team = (state = {
    isFetching: false,
    teamDetail: {}
}, action) => {
    switch (action.type) {
        case REQUEST_TEAM:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_TEAM:
            return {
                ...state,
                isFetching: false,
                teamDetail: action.teamDetail,
                lastUpdated: action.receivedAt
            };
        case REQUEST_HISTORY:
            return {
                ...state,
                isFetching: false,
                teamHistory: action.teamHistory,
                lastUpdated: action.receivedAt
            };
        case RECEIVE_HISTORY:
            return {
                ...state,
                isFetching: false,
                teamHistory: action.teamHistory,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
}

export default team