import {
    GET_LIST_SUCCESS,
    GET_LIST_FAILURE,
    GET_LIST_WATCHER,
} from '../../constant';

export function getListWatcher(payload, resolve, reject) {
    return { type: GET_LIST_WATCHER, payload, resolve, reject };
}

export function getListSuccess(payload) {
    return { type: GET_LIST_SUCCESS, payload: payload };
}

export function getListError(error) {
    return { type: GET_LIST_FAILURE, payload: error };
}
