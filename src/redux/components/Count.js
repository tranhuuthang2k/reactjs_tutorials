import React from "react";
import { useSelector } from "react-redux";

const CountResult = () => {
  // lay state trong store
  const counter = useSelector((state) => state.counter.count);
  return <h1> {counter} </h1>;
};
export default React.memo(CountResult);
