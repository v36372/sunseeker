import {
    REQUEST_MATCH, RECEIVE_MATCH, REQUEST_HISTORY_MATCH, RECEIVE_HISTORY_MATCH,
    REQUEST_MUTUAL_HISTORY, RECEIVE_MUTUAL_HISTORY
} from '../actions'

const match = (state = {
    isFetching: false,
    isLoadingMutualHistory: true,
    isLoadingHistoryA: true,
    isLoadingHistoryB: true,
    matchDetail: {},
    teamMatchHistoryA: {},
    teamMatchHistoryB: {},
    mutualHistory: {},
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
                if (Array.isArray(action.teamHistory) && action.teamHistory.length) {
                    return {
                        ...state,
                        isFetching: false,
                        isLoadingHistoryA: false,
                        teamMatchHistoryA: action.teamHistory,
                        lastUpdated: action.receivedAt
                    };
                } else {
                    return {
                        ...state,
                        isFetching: false,
                        isLoadingHistoryA: false,
                        lastUpdated: action.receivedAt
                    };
                }
            } else {
                if (Array.isArray(action.teamHistory) && action.teamHistory.length) {
                    return {
                        ...state,
                        isFetching: false,
                        isLoadingHistoryB: false,
                        teamMatchHistoryB: action.teamHistory,
                        lastUpdated: action.receivedAt
                    };
                } else {
                    return {
                        ...state,
                        isFetching: false,
                        isLoadingHistoryB: false,
                        lastUpdated: action.receivedAt
                    };
                }
            }
        case REQUEST_MUTUAL_HISTORY:
            return {
                ...state,
                isFetching: true,
                teamA: action.teamA,
                teamB: action.teamB,
            };
        case RECEIVE_MUTUAL_HISTORY:
            return {
                ...state,
                isFetching: false,
                isLoadingMutualHistory: false,
                mutualHistory: action.mutualHistory,
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