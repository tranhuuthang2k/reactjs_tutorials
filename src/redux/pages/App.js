import React from "react";
import CounterResult from "../components/Count";
import Decrement from "../components/Decrement";
import Increment from "../components/Increment";

const CounterPage = () => {
  return (
    <>
      <CounterResult />
      <Increment />
      <Decrement />
    </>
  );
};
export default React.memo(CounterPage);
