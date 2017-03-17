import {
    REQUEST_TEAM, RECEIVE_TEAM
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
        default:
            return state
    }
}

export default team