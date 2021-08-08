import {all, call} from 'redux-saga/effects';
import { WatchProductDataHome } from '../sagas/sagas';
export default function* rootSaga(){
    yield all(
        [
            call(WatchProductDataHome)
        ]
    );
}