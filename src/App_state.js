import { useState } from "react";
import "./App.css";
import { Modal } from "bootstrap";

function App() {
  const 내용 = "teststsetsetsetse";
  const styleText = { fontSize: "2em", color: "red" };
  const btnClick = () => {
    console.log("test");
  };

  const [title, setTitle] = useState(["seoul", "busan", "daegu"]); //변수명,함수(주로set을붙임)
  const changeData = () => {
    const newArray = [...title];
    newArray[0] = "inchon";
    setTitle(newArray);
  };
  const [num, setnum] = useState(0);
  const changeNum = () => {
    setnum(1);
  };
  const zeroNum = () => {
    setnum(0);
  };
  const [myNum, setMyNum] = useState(0);

  return (
    <div className="App">
      <div className="text" style={styleText}>
        {num}
        <button onClick={changeData}>클릭</button>
      </div>
      <button onClick={changeNum}>클릭num</button>
      <button onClick={zeroNum}>되돌리기</button>
      <div>
        {title[0]}

        <span
          onClick={() => {
            setMyNum(myNum + 1);
          }}
          style={{ cursor: "pointer" }}
        >
          ❤
        </span>
        {myNum}
      </div>
    </div>
  );
}

export default App;
