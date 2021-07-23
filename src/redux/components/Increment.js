import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter } from "../actions/index";

const IncrementCounter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const dispatchIncrement = () => {
    // goi action vao store
    dispatch(incrementCounter(count));
  };

  return (
    <button type="text" onClick={() => dispatchIncrement()}>
      +
    </button>
  );
};
export default React.memo(IncrementCounter);
