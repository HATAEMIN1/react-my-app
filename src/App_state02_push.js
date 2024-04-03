import React, { useState } from "react";
import "./assets/css/style.css";
function App() {
  const [title, setTitle] = useState(["서울", "인천"]);
  function titleChange() {
    // setTitle(["부산", "대구"]);
    let newArray = [...title];
    console.log(newArray);
    setTitle(newArray);
  }
  function titlePush() {
    // setTitle(["서울1", "인천"]);
    let newArray = [...title];
    newArray.push("경기");
    setTitle(newArray);
    console.log(newArray);
  }
  return (
    <div>
      <div>{/* {title[0]}/{title[1]}/{title[2]} */ title}</div>
      <div
        className="btn"
        style={{ display: "inline-block" }}
        onClick={titleChange}
      >
        클릭
      </div>
      <div
        className="btn"
        style={{ display: "inline-block" }}
        onClick={titlePush}
      >
        추가
      </div>
    </div>
  );
}

export default App;
