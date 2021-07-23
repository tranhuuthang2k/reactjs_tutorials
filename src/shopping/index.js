import React from "react";
import RouteApp from "./routers";
import { Provider } from "react-redux";
import configStore from "./store";
const { store } = configStore();
const Shopping = () => {
  return (
    <Provider store={store}>
      <RouteApp />
    </Provider>
  );
};
export default Shopping;
