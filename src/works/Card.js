import React from 'react';
import "./Card.scss";
import { myworks } from './workhistory';



export default function Card(props) {
    return (
      <>
        <div className="card">
          <h2 className="top"> {props.name}</h2>
          <h3 className="body"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate ratione dicta? Laborum ad unde magni sequi itaque, quo alias.</p></h3>
          <div className="footer">{props.tools}</div>
        </div>
        
      </>
    );
}
