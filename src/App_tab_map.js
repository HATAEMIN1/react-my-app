import React, { useState } from "react";
import "./assets/css/style.css";

function App() {
  const [lorem, setLorem] = useState([
    "Lorem ipsum dolor sit amet1.",
    "Lorem ipsum dolor sit amet2.",
    "Lorem ipsum dolor sit amet3.",
  ]);
  const [tab, setTab] = useState(0);
  return (
    <div>
      <ul className="menu">
        {lorem.map((item, idx) => {
          return (
            <div>
              <li
                className={`${idx == tab ? "active" : ""}`}
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
      <div>{lorem[tab]}</div>
    </div>
  );
}

export default App;
