import { takeLatest, put, call } from 'redux-saga/effects';

import {
    LOGIN_WATCHER,
} from '../../constant';

import {
    userLoginError,
    userLoginSuccess,
} from '../../action';

import {
    API_URL, BASE_URL,
} from '../../../axios/config'

function* onUserLogin(userLoginAction) {
    let { payload, resolve, reject } = userLoginAction;
    try {
        const header = { 'Content-Type': 'multipart/form-data' }

        const formData = new FormData()
        formData.append('email', payload.userEmail);
        formData.append('password', payload.userPassword);

        const response = yield fetch(BASE_URL + API_URL.LOGIN, {
            method: 'POST',
            headers: header,
            body: formData
        }).then((res) => res.json());

        yield put(userLoginSuccess(response));
        resolve(response);
    } catch (e) {
        yield put(userLoginError(e));
        reject(e);
    }
}

export function* userLoginActionWatcher() {
    yield takeLatest(LOGIN_WATCHER, onUserLogin)
}