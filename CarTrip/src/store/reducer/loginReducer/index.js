import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGIN_WATCHER,
} from '../../constant';

const initialState = {
	loginError: null,
	loginLoader: false,
	loginData: [],
};

export default function loginReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_WATCHER:
			return {
				...state,
				loginLoader: true
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loginError: null,
				loginData: action.payload,
				loginLoader: false
			};
		case LOGIN_FAILURE:
			return {
				...state,
				loginError: action,
				loginLoader: false
			};
		default:
			return state;
	}
}
