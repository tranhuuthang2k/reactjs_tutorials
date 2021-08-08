import {call, put,takeEvery} from "redux-saga/effects";
import * as actions from "../actions";
function* getProductSaga(action) {
   try {
      console.log(actions);
   //    yield put (actions.startGetProduct(true));
   //    const data = yield call(api.getDataProducts);
   //   if(!queryHelpers.isEmptyObject(data))
   //   {
   //      yield put(tyoes.GET_DATA_SUCCESS(data));
   //   }
   //   else 
   //   {
   //      yield put(types)
   //   }
   } catch (e) {
      console.log(e);
   //     yield put (actions.startGetProductFail(e));
   // }
   // finally{
   //    yield put(actions.stopGetProduct(false));
   // }
}
}
export function* WatchProductDataHome()
{
   yield takeEvery(actions.getDataProducts, getProductSaga);
}