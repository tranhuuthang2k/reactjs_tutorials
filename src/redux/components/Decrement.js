import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter } from "../actions/index";

const DecrementCounter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const dispatchIncrement = () => {
    // goi action vao store
    dispatch(decrementCounter(count));
  };

  return (
    <button type="text" onClick={() => dispatchIncrement()}>
      +
    </button>
  );
};
export default React.memo(DecrementCounter);
