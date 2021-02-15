import { takeLatest, put, call } from 'redux-saga/effects';

import {
    SIGNUP_WATCHER,
} from '../../constant';

import {
    userRegistrationError,
    userRegistrationSuccess,
} from '../../action';

import {
    API_URL, BASE_URL,
} from '../../../axios/config'

function* onUserRegistration(userRegistrationAction) {
    let { payload, resolve, reject } = userRegistrationAction;
    try {
        const header = { 'Content-Type': 'multipart/form-data' }

        const formData = new FormData()
        formData.append('name', payload.userName);
        formData.append('email', payload.userEmail);
        formData.append('password', payload.userPassword);
        formData.append('role', payload.userType);

        const response = yield fetch(BASE_URL + API_URL.SIGNUP, {
            method: 'POST',
            headers: header,
            body: formData
        }).then((res) => res.json());

        yield put(userRegistrationSuccess(response));
        resolve(response);
    } catch (e) {
        yield put(userRegistrationError(e));        
        reject(e);        
    }
}

export function* userRegisterActionWatcher() {
    yield takeLatest(SIGNUP_WATCHER, onUserRegistration)
}