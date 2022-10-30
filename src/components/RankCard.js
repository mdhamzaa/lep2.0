import React from "react";

export default function RankCard(props) {
  return (
    <div className={`topCards card-${props.position}`} id={`card${props.cardNumber}`} onClick={props.rotate}>
      <div className="topHead">#Rank {props.rank}</div>
      <div className="topContent">
        <img className="topImg" src={props.image}  alt="No Image Found..." />
        <div className="rankName">{props.name}</div>
        <div className="rankProfession">{props.profession}</div>
        <div className="rankRating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
        </div>
      </div>
    </div>
  );
}
