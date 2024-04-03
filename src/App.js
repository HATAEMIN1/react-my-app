import React, { useState } from "react";
import "./assets/css/style.css";
function App() {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState([
    "1.Lorem ipsum dolor sit amet.",
    "2.Lorem ipsum dolor sit amet.",
    "3.Lorem ipsum dolor sit amet.",
  ]);
  return (
    <div>
      <div>
        <ul className="menu">
          {data.map((item, idx) => {
            return (
              <div>
                <li
                  className={idx == tab ? "active" : ""}
                  onClick={() => {
                    setTab(idx);
                  }}
                >
                  tab{idx + 1}
                </li>
              </div>
            );
          })}
        </ul>
        <div>{data[tab]}</div>
      </div>
    </div>
  );
}
export default App;
