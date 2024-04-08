import React, { useState } from "react";
import "./assets/css/style.scss";
// import ModalView from "./components/ModalView";

function App() {
  let [viewData, setViewData] = useState([]);
  let [textData, setTextData] = useState([]);
  let [mView, setMView] = useState(false);
  let [vnum, setVNum] = useState(0);
  function clickListener() {
    let copy = [...viewData];
    copy.unshift(textData);
    setViewData(copy);
    setTextData("");
  }
  function textDataChange(e) {
    console.log(e.target.value);
    setTextData(e.target.value);
  }
  return (
    <>
      <div className="inputWrap">
        {/* <input type="text" id="name" onChange={()=>{setTextData("ddd")}} />
        <input type="text" id="name" onChange={함수이름} />
        <input type="text" id="name" onChange={()=>{함수}} /> */}
        <input
          type="text"
          id="name"
          onChange={textDataChange}
          value={textData}
          placeholder="입력하세요"
        />
        <button onClick={clickListener}>입력</button>
      </div>

      <ul className="menupan">
        {viewData.map((item, idx) => {
          return (
            <>
              <li
                onClick={() => {
                  setMView(true);
                  setVNum(idx);
                }}
              >
                {viewData[idx]}
              </li>
            </>
          );
        })}
      </ul>
      {mView == true ? (
        <ModalView
          onclick={() => {
            setMView(false);
          }}
          viewData={viewData}
          vnum={vnum}
        />
      ) : null}
    </>
  );
}

function ModalView(props) {
  return (
    <div>
      <div className="modalWrap">
        <div className="modal">
          <button onClick={props.onclick} className="close">
            닫기
          </button>
          <div className="modalBody">
            <h3>{props.viewData[props.vnum]}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
