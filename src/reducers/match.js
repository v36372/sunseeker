import {
    REQUEST_MATCH, RECEIVE_MATCH
} from '../actions'

const match = (state = {
                  isFetching: false,
                  matchDetail: {}
              }, action) => {
    switch (action.type) {
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