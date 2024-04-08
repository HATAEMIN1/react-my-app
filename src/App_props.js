import React, { useState } from "react";
import "./assets/css/style.css";

function App() {
  // const num = 30;
  let [num, setNum] = useState(10);
  return (
    <div>
      <div className="wrap">
        부모 {num}
        <button
          onClick={() => {
            setNum(20);
          }}
        >
          숫자 변경
        </button>
        <Child1 num={num}></Child1>
      </div>
    </div>
  );
}

function Child1(props) {
  console.log(props);
  return (
    <div>
      <div className="wrap">
        자식1 {props.num}
        <Child2 childnum={props.num}></Child2>
      </div>
    </div>
  );
}

function Child2(props) {
  return (
    <div>
      <div className="wrap">자식2 {props.childnum}</div>
    </div>
  );
}

export default App;
