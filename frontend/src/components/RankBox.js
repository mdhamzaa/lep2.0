import React from "react";
import { useState } from "react";
import RankCard from "./RankCard";
import "../CSS/home.css";
import rank1Img from "../Images/rank1.jpg"
import rank2Img from "../Images/rank2.jpg"
import rank3Img from "../Images/rank3.jpg"

export default function RankBox() {
    // All states
  const [positions, setpositions] = useState(["left", "center", "right"]);

  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");
  const card3 = document.getElementById("card3");
  let cards = document.querySelectorAll(".topCards");
  function rotate(eventObj) {
    if (eventObj.target == card1) {
      setpositions(["center", "right", "left"]);
    } else if (eventObj.target == card2) {
      setpositions(["left", "center", "right"]);
    } else {
      setpositions(["right", "left", "center"]);
    }
  }

  return (
    <div
      id="topContent"
    >
      <h1 id="topHead">Top Workers of the Week</h1>
      <div id="topContainer">
        <RankCard
          name="Person1"
          profession="professions1"
          rank="2"
          position={positions[0]}
          cardNumber={1}
          rotate={rotate}
          image={rank2Img}
        />
        <RankCard
          name="Person2"
          profession="professions2"
          rank="1"
          position={positions[1]}
          cardNumber={2}
          rotate={rotate}
          image={rank1Img}
        />
        <RankCard
          name="Person3"
          profession="professions3"
          rank="3"
          position={positions[2]}
          cardNumber={3}
          rotate={rotate}
          image={rank3Img}
        />
      </div>
    </div>
  );
}
