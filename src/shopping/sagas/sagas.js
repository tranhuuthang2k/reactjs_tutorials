import { put, takeEvery } from "redux-saga/effects";
import { helpers } from "../helpers/common";
import * as types from "../actions/types";
import * as actions from "../actions";

import { api } from "../services/api";

function* getProductSaga() {
  try {
    yield put(actions.startGetProduct(true));
    const data = api.getDataProducts;
    if (!helpers.isEmptyObject(data)) {
      yield put(actions.getProductSuccess(data));
    }
  } catch (e) {
    yield put(actions.getProductFail(e));
  } finally {
    yield put(actions.stopGetProduct(false));
  }
}
function* getDataProductDetail({ id }) {
  try {
    yield put(actions.startGetProductById(true));
    const data = yield api.getDataProductById(id);
    if (!helpers.isEmptyObject(data)) {
      yield put(actions.getProductByIdSuccess(data));
    }
  } catch (e) {
    yield put(actions.getProductByIdFail(e));
  } finally {
    yield put(actions.stopGetProductById(false));
  }
}

export function* WatchProductDataHome() {
  yield takeEvery(types.Get_DATA_PRODUCT, getProductSaga);
  yield takeEvery(types.GET_DATA_PRODUCT_BY_ID, getDataProductDetail);
}
