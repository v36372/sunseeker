import {
	RECEIVE_LOGIN,
	RECEIVE_FEEDBACK,
	RECEIVE_REGISTER
} from '../actions'

const admin = (state = {
	loginResult: {}
}, action) => {
	switch (action.type) {
		case RECEIVE_FEEDBACK:
			return {
				...state,
				feedBackArr: action.feedBackArr
			};
		case RECEIVE_REGISTER:
			return {
				...state,
				registerResult: action.registerResult
			};
		case RECEIVE_LOGIN:
			return {
				...state,
				loginResult: action.loginResult
			};
		default:
			return state
	}
}

export default admin

