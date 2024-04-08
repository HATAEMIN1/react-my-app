import React, { useState } from "react";
import "./assets/css/style.css";
function App() {
  let [mView, setMView] = useState(false);
  function modalView() {
    setMView(true);
  }
  function modalClose() {
    setMView(false);
  }
  return (
    <div>
      <div>
        <button className="btn primary" onClick={modalView}>
          모달창 열기
        </button>
      </div>
      {mView == true ? <Modal onclick={modalClose} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div>
      <div className="modalWrap">
        <div className="modal">
          모달창
          <button onClick={props.onclick}>닫기</button>
        </div>
      </div>
    </div>
  );
}

export default App;
