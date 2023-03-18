import React from "react";
import "../CSS/home.css"

import workImg from "../Images/work.jpg"
import hireImg from "../Images/hire.jpg"
import { useNavigate } from "react-router-dom";

export default function Option(props) {
  let navigate = useNavigate();
  const linktoR = () => {

    if (props.choice === "work") {
      navigate("/employee-register");
    } else {
      navigate("/employer-register");
    }
  }
  return (
    <div
      id={props.choice}
      className="optionCard"
      data-aos="fade-right"
      data-aos-offset="6"
      data-aos-duration="800"
    >
      <img id={`${props.choice}+Img`} className="optionImg" src={props.choice === 'work' ? workImg : hireImg} />
      <h3 className="optionHead">I Want To {props.choice}</h3>
      <button className="optionBtn" onClick={linktoR} >{props.choice} </button>
    </div>
  );
}
