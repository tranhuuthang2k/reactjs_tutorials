import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../services/api";
import { helper } from "../helpers/common";
import * as actions from "../actions/";
import { REQUEST_SERVER_FOOTBALL } from "../actions/types";

// worker + watcher : //theo doi va xu ly cac action
// redux saga chi ho tro generator function

// worker actions : xu ly cac actions
function* handleFootballSaga() {
  try {
    yield put(actions.loadingGetData(true));
    const result = yield call(api.getDataResultFootball);
    if (!helper.isEmptyObject(result)) {
      // co du lieu tu phia api tra ve
      yield put(actions.getDataSuccessful(result));
    } else {
      // khong nhan dc data tu api tra ve
      yield put(
        actions.getDataEmpty({
          cod: 404,
          message: "Not found data",
        })
      );
    }
  } catch (error) {
    yield put(actions.getDataFail(error));
  } finally {
    // se chay cuoi cung khi try hay la catch da xu ly xong
    yield put(actions.loadingGetData(false));
  }
}

// watcher actions
export function* watchHandleFootball() {
  // theo doi hanh xay ra
  yield takeEvery(REQUEST_SERVER_FOOTBALL, handleFootballSaga);
}
