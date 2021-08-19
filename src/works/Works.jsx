import React from "react";
import "./Works.scss";
import { myworks } from "./workhistory";
import Card from "./Card";

export default function Works() {
  return (
    <div className="works" id="works">
      <h1 className="work-title"> my works </h1>
      <div className="cards">
        {myworks.map((work) => {
          return (
            <a href="#">
              <Card
                name={work.name}
                description={work.description}
                tools={<p> we have all we need </p>}
              />
            </a>
          );
        })}
      </div>
      <div className="social">
        <a href="#"> facebook</a>
        <a href="#"> facebook</a>
        <a href="#"> facebook</a>
      </div>
    </div>
  );
}
