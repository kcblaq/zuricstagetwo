import React, { Component } from "react";
import "./Contact.scss";
// import { ReactComponent as Msg } from "../asset/msg.svg";

export class Contact extends Component {
  render() {
    return (
      <div className="contact" id="contact">
        <h1 className="contact-title"> Get in touch with me </h1>
        <div className="contact-child">
          <div className="image-holder">
            <h1 className="exp"> I am available at all time, always there when you call</h1>
          </div>
          <div className="form-holder">
            <form>
              <h2> I respond in few hours time</h2>
              <label>
                Name:
                <input type="text" className="in" />
              </label>
              <label>
                Email:
                <input type="email" className="in" />
              </label>
              <button className="submit" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
