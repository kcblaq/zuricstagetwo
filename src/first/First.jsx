import React from "react";
import "./first.scss";

function First() {
  return (
    <div className="main">
      <div className="menu">
        <div className="logo"> KeleCH</div>
        <div className="menu-items">
          <ul>
            <a href="#works">
              <li>Works</li>
            </a>
            <a href="#about">
              <li>About </li>
            </a>
            <a href="#contact">
              <li>Contact </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="intro">
        <h1> I am kelechi</h1>
        
        <h2> I come to mind when it comes to dynamic programming for practical problem solutions</h2> 
      </div>
    </div>
  );
}

export default First;
