import { useState } from "react";
import "./assets/css/style.css";
import { Modal } from "bootstrap";
import logo from "./logo.svg";

function App() {
  const myStyle = { display: "flex", backgroundColor: "red" };
  function view() {
    alert("test");
  }
  function countNum() {
    return 100;
  }
  const yourName = "이순신";
  return (
    <div>
      <div style={myStyle}>
        <h1 className="logo">test</h1>
        <span>test</span>
      </div>
      <button className="btn info" onClick={view}>
        클릭
      </button>
      <button className="btn primary">클릭</button>
      <button className="btn ">클릭</button>
      {countNum()}/{yourName}
      <img src={logo}></img>
    </div>
  );
}

export default App;
