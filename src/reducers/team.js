import {
	REQUEST_TEAM, RECEIVE_TEAM,
	REQUEST_HISTORY, RECEIVE_HISTORY,
	REQUEST_TEAM_INFO, RECEIVE_TEAM_INFO
} from '../actions'

const team = (state = {
	isFetching: false,
	teamDetail: {},
	teamInfo: {}
}, action) => {
	switch (action.type) {
		case REQUEST_TEAM_INFO:
			return {
				...state,
				isFetching: true,
			};
		case RECEIVE_TEAM_INFO:
			return {
				...state,
				teamInfo: action.teamInfo,
				isFetching: false,
			};
		case REQUEST_TEAM:
			return {
				...state,
				isFetching: true,
			};
		case REQUEST_HISTORY:
			return {
				...state,
				isFetching: false,
			};
		case RECEIVE_TEAM:
			return {
				...state,
				isFetching: false,
				teamDetail: action.teamDetail,
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
