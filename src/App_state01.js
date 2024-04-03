//rfce
import React, { useState } from "react";
import "./assets/css/style.css";

function App() {
  const [test, setTest] = useState("ha");
  function testChange(name) {
    setTest(name);
  }
  console.log("ok");
  return (
    <div>
      <h1>{test}</h1>
      <button
        className="btn info"
        onClick={() => {
          testChange("홍길동");
        }}
      >
        클릭
      </button>
      <button
        className="btn primary"
        onClick={() => {
          testChange("이순신");
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default App;
