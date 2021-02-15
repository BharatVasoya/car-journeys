import {
    GET_CATEGORY_LIST_SUCCESS,
    GET_CATEGORY_LIST_FAILURE,
    GET_CATEGORY_LIST_WATCHER,
} from '../../constant';

export function getCategoryListWatcher(payload, resolve, reject) {
    return { type: GET_CATEGORY_LIST_WATCHER, payload, resolve, reject };
}

export function getCategoryListSuccess(payload) {
    return { type: GET_CATEGORY_LIST_SUCCESS, payload: payload };
}

export function getCategoryListError(error) {
    return { type: GET_CATEGORY_LIST_FAILURE, payload: error };
}
