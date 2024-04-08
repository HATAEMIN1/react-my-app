import React from "react";

function Main({ vData }) {
  return (
    <div>
      <div className="visual d-flex">mainVisual</div>
      <div className="container">
        <ul className="productList">
          {vData.map((item) => {
            return (
              <li>
                <a href={`./Product/${item.id}`}>
                  <img src={`./images/${item.img}`} alt="" />
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Main;
