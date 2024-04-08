import React from "react";

function ModalView(props) {
  return (
    <div>
      <div className="modalWrap">
        <div className="modal">
          <button onClick={props.onclick} className="close">
            닫기
          </button>
          <div className="modalBody">
            <h3>{props.listData[props.vNum].title}</h3>
            <p>{props.listData[props.vNum].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalView;
