import {
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_WATCHER,
} from '../../constant';

export function userRegistrationWatcher(payload, resolve, reject) {
    return { type: SIGNUP_WATCHER, payload, resolve, reject };
}

export function userRegistrationSuccess(payload) {
    return { type: SIGNUP_SUCCESS, payload: payload };
}

export function userRegistrationError(error) {
    return { type: SIGNUP_FAILURE, payload: error };
}