import {all} from 'redux-saga/effects'

import {getListActionWatcher} from './getList'
import {userRegisterActionWatcher} from './signup'
import {userLoginActionWatcher} from './login'
import {locationListActionWatcher} from './locationList'
import {userForgotPasswordActionWatcher} from './forgotPassword'
import {getCategoryListActionWatcher} from './getCategoryList'

export default function * root () {
  yield all([
    getListActionWatcher(),
    userRegisterActionWatcher(),
    userLoginActionWatcher(),
    locationListActionWatcher(),
    userForgotPasswordActionWatcher(),
    getCategoryListActionWatcher(),
  ])
}
