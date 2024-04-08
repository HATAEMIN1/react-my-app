import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-primary">
        <div className="container d-flex justify-content-between">
          <h1>로고</h1>
          <ul className="topMenu d-flex">
            <li>
              <NavLink to="/HOME">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/COMPANY">COMPANY</NavLink>
            </li>
            <li>
              <NavLink to="/PRODUCT">PRODUCT</NavLink>
            </li>
            <li>
              <NavLink to="/COMMUNITY">COMMUNITY</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
