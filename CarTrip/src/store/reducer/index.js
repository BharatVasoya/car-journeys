import { combineReducers } from "redux";

import getListReducer from "./getListReducer";
import signupReducer from "./signupReducer";
import loginReducer from "./loginReducer";
import locationListReducer from "./locationListReducer";
import forgotPasswordReducer from "./forgotPasswordReducer";
import getCategotyListReducer from "./getCategotyListReducer";

const rootReducer = combineReducers({
	getListReducer,
	signupReducer,
	loginReducer,
	forgotPasswordReducer,
	locationListReducer,
	getCategotyListReducer,
});

export default rootReducer;
