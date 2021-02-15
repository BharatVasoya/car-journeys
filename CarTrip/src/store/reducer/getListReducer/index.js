import {
	GET_LIST_SUCCESS,
	GET_LIST_FAILURE,
	GET_LIST_WATCHER,
} from '../../constant';

const initialState = {
  getListError: null,
  getLostLoader: false,
  getListData: [],
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_WATCHER:
      return {
        ...state,
        getLostLoader: true
      };
    case GET_LIST_SUCCESS:
      return {
        ...state,
        getListError: null,
        getListData: action.payload,
        getLostLoader: false
      };
    case GET_LIST_FAILURE:
      return {
        ...state,
        getListError: action,
        getLostLoader: false
      };
    default:
      return state;
  }
};
