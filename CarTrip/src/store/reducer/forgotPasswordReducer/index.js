import {
	FORGOT_PASSWORD_SUCCESS,
	FORGOT_PASSWORD_FAILURE,
	FORGOT_PASSWORD_WATCHER,
} from '../../constant';

const initialState = {
	forgotPasswordError: null,
	forgotPasswordLoader: false,
	forgotPasswordData: [],
};

export default function forgotPasswordReducer(state = initialState, action) {
	switch (action.type) {
		case FORGOT_PASSWORD_WATCHER:
			return {
				...state,
				forgotPasswordLoader: true
			};
		case FORGOT_PASSWORD_SUCCESS:
			return {
				...state,
				forgotPasswordError: null,
				forgotPasswordData: action.payload,
				forgotPasswordLoader: false
			};
		case FORGOT_PASSWORD_FAILURE:
			return {
				...state,
				forgotPasswordError: action,
				forgotPasswordLoader: false
			};
		default:
			return state;
	}
}
