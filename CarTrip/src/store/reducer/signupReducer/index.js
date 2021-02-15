import {
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	SIGNUP_WATCHER,
} from '../../constant';

const initialState = {
	registrationError: null,
	registrationLoader: false,
	registrationData: [],
};

export default function signupReducer(state = initialState, action) {
	switch (action.type) {
		case SIGNUP_WATCHER:
			return {
				...state,
				registrationLoader: true
			};
		case SIGNUP_SUCCESS:
			return {
				...state,
				registrationError: null,
				registrationData: action.payload,
				registrationLoader: false
			};
		case SIGNUP_FAILURE:
			return {
				...state,
				registrationError: action,
				registrationLoader: false
			};
		default:
			return state;
	}
}
