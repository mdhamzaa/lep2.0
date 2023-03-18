import React from "react";

export default function ReviewCard(props) {


  return (
    <div className="reviewcard">
      <div className="reviewImgCon">
        <img src={props.image} alt="" className="reviewImg" />
      </div>
      <div className="name-profession">
        <div className="name">{props.name}</div>
        <div className="profession">{props.profession}</div>
      </div>
      <div className="rating">
        {Array(props.stars).fill(0).map(() => {

          return <i className="fa-solid fa-star"></i>
        })}

      </div>
      <div className="reviewContent">{props.comment}</div>
    </div>
  );
}
