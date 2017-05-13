import {
    REQUEST_MATCH, RECEIVE_MATCH, REQUEST_HISTORY_MATCH, RECEIVE_HISTORY_MATCH
} from '../actions'

const match = (state = {
                  isFetching: false,
                  matchDetail: {},
                    teamMatchHistory: {},
              }, action) => {
    switch (action.type) {
        case REQUEST_HISTORY_MATCH:
            return {
                ...state,
                isFetching: true,
                id: action.teamId,
            };
        case RECEIVE_HISTORY_MATCH:
            const obj = Object.assign(state.teamMatchHistory);
            obj[action.teamSide] = action.teamHistory;
            return {
                ...state,
                isFetching: false,
                teamMatchHistory: obj,
                lastUpdated: action.receivedAt
            };
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