import {
	LOCATION_LIST_WATCHER,
	LOCATION_LIST_SUCCESS,
	LOCATION_LIST_FAILURE,
} from "../../constant";

export function getLocationListWatcher(payload, resolve, reject) {
	return { type: LOCATION_LIST_WATCHER, payload, resolve, reject };
}

export function getLocationListSuccess(payload) {
	return { type: LOCATION_LIST_SUCCESS, payload: payload };
}

export function getLocationListError(error) {
	return { type: LOCATION_LIST_FAILURE, payload: error };
}