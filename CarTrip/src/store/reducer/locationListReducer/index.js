import {
	LOCATION_LIST_WATCHER,
	LOCATION_LIST_SUCCESS,
	LOCATION_LIST_FAILURE,
} from '../../constant';

const initialState = {
	LocationListError: null,
	LocationListLoader: false,
	LocationListData: [],
};

export default function chatListReducer(state = initialState, action) {
	switch (action.type) {
		case LOCATION_LIST_WATCHER:
			return {
				...state,
				LocationListLoader: true
			};
		case LOCATION_LIST_SUCCESS:
			return {
				...state,
				LocationListError: null,
				LocationListData: action.payload,
				LocationListLoader: false
			};
		case LOCATION_LIST_FAILURE:
			return {
				...state,
				LocationListError: action,
				LocationListLoader: false
			};
		default:
			return state;
	}
}
