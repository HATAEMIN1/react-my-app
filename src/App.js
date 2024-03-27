import { useState } from "react";
import "./App.css";
// import Button from "@mui/material/Button";
// import Button from "react-bootstrap/Button";
// import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState(0);

  let [logo, setLogo] = useState("ReactBlog");
  const han = "test입니다.1111";
  const hancss = { color: "blue", fontSize: "2em" };
  const bgcblack = { backgroundColor: "#000" };
  const w100 = { width: "100px" };
  const h100 = { height: "100px" };
  function onmyclick() {
    console.log("test");
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={hancss}>블로그임</h4>
      </div>
      <button
        onClick={() => {
          let copy1 = [글제목.sort()];
          글제목변경(copy1);
        }}
      >
        정렬하기
      </button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자코트 추천";
          글제목변경(copy);
        }}
      >
        글 수정
      </button>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <h3 style={hancss}>{han}</h3>
      <div style={{ ...bgcblack, ...w100, ...h100 }}>black</div>
      <button className="btn" onClick={onmyclick}>
        test
      </button>

      <div className="btn btn-primary">button</div>
      <div className="container">
        <div className="row">
          <div className="col">1</div>
          <div className="col">2</div>
          <div className="col">3</div>
          <div className="col">4</div>
        </div>
      </div>
      <h3>test</h3>
      <div className="container">
        <div className="row">
          <div className="col bg-primary">1</div>
          <div className="col">1</div>
          <div className="col">1</div>
          <div className="col">1</div>
        </div>
      </div>
    </div>
  );
}

export default App;
