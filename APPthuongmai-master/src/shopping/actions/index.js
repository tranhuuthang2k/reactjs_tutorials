import * as types from "./types";
export const getDataProducts = () => (
    {
        type: types.GET_DATA_SUCCESS,
    }
);
// export const startGetProducts = (start) => (
//     {
//         type: types.START_GET_DATA_PRODUCT,
//         start
//     }
// );
// export const startGetProductSuccess = (data) => (
//     {
//         type: types.GET_DATA_SUCCESS,
//         data
//     }
// );
// export const startGetProductFail = (data) => (
//     {
//         type: types.GET_DATA_FAIL,
//         data
//     }
// );
// export const stopGetProducts = (stop) => (
//     {
//         type: types.STOP_GET_DATA_PRODUCT,
//         stop
//     }
// );