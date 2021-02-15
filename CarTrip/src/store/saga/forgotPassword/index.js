import { takeLatest, put, call } from 'redux-saga/effects';

import {
    FORGOT_PASSWORD_WATCHER,
} from '../../constant';

import {
    userForgotPasswordError,
    userForgotPasswordSuccess,
} from '../../action';

import {
    API_URL, BASE_URL,
} from '../../../axios/config'

function* onUserForgotPassword(userForgotPasswordAction) {
    let { payload, resolve, reject } = userForgotPasswordAction;
    try {
        const header = { 'Content-Type': 'multipart/form-data' }

        const formData = new FormData()
        formData.append('email', payload.userEmail);

        const response = yield fetch(BASE_URL + API_URL.FORGOT_PASSWORD, {
            method: 'POST',
            headers: header,
            body: formData
        }).then((res) => res.json());

        yield put(userForgotPasswordSuccess(response));
        resolve(response);
    } catch (e) {
        yield put(userForgotPasswordError(e));
        reject(e);
    }
}

export function* userForgotPasswordActionWatcher() {
    yield takeLatest(FORGOT_PASSWORD_WATCHER, onUserForgotPassword)
}