import React from "react";
import { Provider } from "react-redux";
import RouteApp from './routers';
import configStore from "./store";
const {store} = configStore();
const Shopping = () =>{

    return(
    <Provider store = {store}>
        <RouteApp/>
    </Provider>
)};
export default React.memo(Shopping);