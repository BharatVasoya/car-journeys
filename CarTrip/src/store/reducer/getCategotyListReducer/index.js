import {
	GET_CATEGORY_LIST_SUCCESS,
	GET_CATEGORY_LIST_FAILURE,
	GET_CATEGORY_LIST_WATCHER,
} from '../../constant';

const initialState = {
  getCategoryListError: null,
  getCategoryListLoader: false,
  getCategoryListData: [],
};

export default function getCategoryListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_LIST_WATCHER:
      return {
        ...state,
        getCategoryListLoader: true
      };
    case GET_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        getCategoryListError: null,
        getCategoryListData: action.payload,
        getCategoryLostLoader: false
      };
    case GET_CATEGORY_LIST_FAILURE:
      return {
        ...state,
        getCategoryListError: action,
        getCategoryLostLoader: false
      };
    default:
      return state;
  }
};
