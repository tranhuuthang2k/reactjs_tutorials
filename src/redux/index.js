import React from "react";
import { Provider } from "react-redux";
import CounterPage from "./pages/App";
import store from "./store";

const AppCounter = () => {
  return (
    <Provider store={store}>
      <CounterPage />
    </Provider>
  );
};
export default React.memo(AppCounter);
