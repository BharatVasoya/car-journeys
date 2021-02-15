import { takeLatest, put, call } from 'redux-saga/effects';

import {
    GET_LIST_WATCHER,
} from '../../constant';

import {
    getListError,
    getListSuccess,
} from '../../action';

import {
    API_URL, BASE_URL,
} from '../../../axios/config'

import { Constants } from '../../../common/styles';

function* onGetListData(getListAction) {
    let { payload, resolve, reject } = getListAction;
    try {
        const header = { 'Content-Type': 'application/json', Authorization: Constants.TOKEN }

        const response = yield fetch(BASE_URL + API_URL.GET_LIST, {
            method: 'GET',
            headers: header,
            body: ""
        }).then((res) => res.json());

        yield put(getListSuccess(response));        
        resolve(response);
    } catch (e) {
        yield put(getListError(e));        
        reject(e);        
    }
}

export function* getListActionWatcher() {
    yield takeLatest(GET_LIST_WATCHER, onGetListData)
}