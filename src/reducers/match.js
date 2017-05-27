import {
    REQUEST_MATCH, RECEIVE_MATCH, REQUEST_HISTORY_MATCH, RECEIVE_HISTORY_MATCH
} from '../actions'

const match = (state = {
    isFetching: false,
    matchDetail: {},
    teamMatchHistoryA: {},
    teamMatchHistoryB: {},
}, action) => {
    switch (action.type) {
        case REQUEST_HISTORY_MATCH:
            return {
                ...state,
                isFetching: true,
                id: action.teamId,
            };
        case RECEIVE_HISTORY_MATCH:
            if (action.teamSide === 'teama') {
                return {
                    ...state,
                    isFetching: false,
                    teamMatchHistoryA: action.teamHistory,
                    lastUpdated: action.receivedAt
                };
            } else {
                return {
                    ...state,
                    isFetching: false,
                    teamMatchHistoryB: action.teamHistory,
                    lastUpdated: action.receivedAt
                };
            }
        case REQUEST_MATCH:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_MATCH:
            return {
                ...state,
                isFetching: false,
                matchDetail: action.matchDetail,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
}

export default match