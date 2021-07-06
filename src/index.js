import React from "react";
import ReactDOM from "react-dom";
// su dung css antd cho toan bo ung dung
import "antd/dist/antd.css";
// import App from "./football/App.js";
// import App from "./corona/app";
// import App from "./theme/App";
// import App from "./hooks/app";
import App from "./movies/routes";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();