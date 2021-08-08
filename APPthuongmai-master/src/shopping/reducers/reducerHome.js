import * as actionsw from "../actions"
const initState = {
    loading : false,
    productData: {},
}
export const homeReducer = (state = initState, action) =>
{
    switch (action.type)
    {
        // case action.startGetProduct: 
        // return {
        //     ...state
        // };
        default:
        return state;
    }
};