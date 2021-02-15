import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_WATCHER,
} from '../../constant';

export function userLoginWatcher(payload, resolve, reject) {
    return { type: LOGIN_WATCHER, payload, resolve, reject };
}

export function userLoginSuccess(payload) {
    return { type: LOGIN_SUCCESS, payload: payload };
}

export function userLoginError(error) {
    return { type: LOGIN_FAILURE, payload: error };
}