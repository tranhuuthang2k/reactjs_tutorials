import React from "react";
import LayoutCorona from "./components/Layout-v2";
import GlobalCorona from "./components/Global-v2";
import CountriesCorona from "./components/Countries-v2";
import CoronaProvider from "./context/CoronaProvider";

const AppCorona = () => {
  return (
    <CoronaProvider>
      <LayoutCorona>
        <h1 style={{ textAlign: "center" }}> Corona virus around the world </h1>
        <GlobalCorona />
        <CountriesCorona />
      </LayoutCorona>
    </CoronaProvider>
  );
};

export default React.memo(AppCorona);
