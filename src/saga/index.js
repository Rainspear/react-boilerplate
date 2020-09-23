import { 
  takeLatest, 
  // takeEvery 
} from "redux-saga/effects";

// constant
import {
  homeConstants
} from "redux/constants";

import * as homeSaga from './homeSaga'


/**
 * Root saga manages watcher lifecycle
 */
export default function* defaultSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(homeConstants.GET_HOME_INFORMATION, homeSaga.getHomeInfomation);
}
