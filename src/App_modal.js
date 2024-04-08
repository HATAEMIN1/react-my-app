import React, { useState } from "react";
import "./assets/css/style.css";
import ModalView from "./components/ModalView";
function App() {
  let [mView, setMView] = useState(false);
  let [vNum, setVNum] = useState(0);
  let viewList = [
    {
      title: "1안녕하세요!!!",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, vitae?",
    },
    {
      title: "2만나서반갑습니다.",
      content:
        " Possimus ratione odio eos nemo sunt enim animi officia consectetur?",
    },
    {
      title: "3홈페이지를 오픈",
      content: " Odio fugit dolor, perferendis minus rem optio a nihil eos!",
    },
    {
      title: "4만나서반갑습니다.",
      content:
        " Est repellendus quod itaque magnam deleniti, cupiditate saepe aspernatur eaque?",
    },
    {
      title: "5만나서반갑습니다.",
      content:
        " Quisquam rem unde id nobis explicabo error beatae reiciendis incidunt.",
    },
  ];
  function modalView(idx) {
    setMView(true);
    setVNum(idx);
  }
  function modalClose() {
    setMView(false);
  }
  return (
    <div>
      <div>
        <ul>
          {viewList.map((item, idx) => {
            return (
              <li
                onClick={() => {
                  modalView(idx);
                }}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
      {mView == true ? (
        <ModalView onclick={modalClose} listData={viewList} vNum={vNum} />
      ) : null}
    </div>
  );
}

export default App;
