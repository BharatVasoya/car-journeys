import { takeLatest, put, call } from 'redux-saga/effects';

import {
    GET_CATEGORY_LIST_WATCHER,
} from '../../constant';

import {
    getCategoryListError,
    getCategoryListSuccess,
} from '../../action';

import {
    API_URL, BASE_URL,
} from '../../../axios/config'

import { Constants } from '../../../common/styles';

function* onGetCategoryListData(getCategoryListAction) {
    let { payload, resolve, reject } = getCategoryListAction;
    try {
        const header = { 'Content-Type': 'application/json' }

        const response = yield fetch(BASE_URL + API_URL.GET_CATEGORY_LIST, {
            method: 'GET',
            headers: header,
            body: ""
        }).then((res) => res.json());

        yield put(getCategoryListSuccess(response));        
        resolve(response);
    } catch (e) {
        yield put(getCategoryListError(e));        
        reject(e);        
    }
}

export function* getCategoryListActionWatcher() {
    yield takeLatest(GET_CATEGORY_LIST_WATCHER, onGetCategoryListData)
}