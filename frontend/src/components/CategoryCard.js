import React from "react";

export default function CategoryCard(props) {
    function capitalize(name){
        return name[0].toUpperCase()+name.substr(1);
    }
  return (
    <span className="card" id="barber">
      <img src={props.image} alt="Loading.." />
      <h3 className="innerHead">{capitalize(props.name)}</h3>
    </span>
  );
}
