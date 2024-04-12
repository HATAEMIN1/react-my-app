import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const num = useSelector((state) => {
    return state.num;
  });
  const title = useSelector((state) => {
    return state.title;
  });
  const content = useSelector((state) => {
    return state.content;
  });
  function handleClick() {
    dispatch({ type: "numup", payload: 1 });
  }
  return (
    <div>
      Counter{num} / {title} /{content}
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

export default Counter;
