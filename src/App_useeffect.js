import React, { useEffect, useState } from "react";
import "./assets/css/style.scss";
import axios from "axios";

function App() {
  let [viewData, setViewData] = useState([]);
  let [num, setNum] = useState(1);
  let [mView,setMView] = useState(true)
  function dataInsert() {}
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?page=1&_limit=10")
      .then(function (res) {
        // console.log(res.data);
        setViewData(res.data);
      })
      .catch(function (error) {
        console.log("no data");
      });
    console.log("view");
  }, []); ///[]있어야 한번만 useEffect됨

  return (
    <>
      {num}
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        좋아요
      </button>
      {viewData.map((item) => {
        return (
          <>
            <div>
              <li>{item.title}</li>
            </div>

          </>
        );
      })}
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
