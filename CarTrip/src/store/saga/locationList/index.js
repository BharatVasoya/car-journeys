import { takeLatest, put } from "redux-saga/effects";

import { LOCATION_LIST_WATCHER } from "../../constant";

import {
	getLocationListError,
	getLocationListSuccess,
} from "../../action";

import { API_URL, BASE_URL, MAP_URL } from "../../../axios/config";
import { Constants } from "../../../common/styles";

function* onGetLocationList(getLocationListAction) {
	let { payload, resolve, reject } = getLocationListAction;

	try {
		const header = { "Content-Type": "application/json" };

		const response = yield fetch(
			MAP_URL + `json?key=${Constants.MAP_KEY}&input=${payload.searchKeyword}`,
			{
				method: "POST",
				headers: header,
				body: ""
			}
		).then((res) => res.json());

		yield put(getLocationListSuccess(response));
		resolve(response);
	} catch (e) {
		yield put(getLocationListError(e));
		reject(e);
	}
}

export function* locationListActionWatcher() {
	yield takeLatest(LOCATION_LIST_WATCHER, onGetLocationList);
}
