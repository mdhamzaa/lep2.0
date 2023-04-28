import React from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SetSearchDetails } from "../features/userSlice";

export default function CategoryCard(props) {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    function capitalize(name){
        return name[0].toUpperCase()+name.substr(1);
    }
    const searchHandler = () => {
      dispatch(
          SetSearchDetails({
              pincode: '',
              skill: props.name

          })
      );
      navigate('/search')
  }
  return (
    <span className="card" id="barber" onClick={searchHandler}>
      <img src={props.image} alt="Loading.." />
      <h3 className="innerHead">{capitalize(props.name)}</h3>
    </span>
  );
}
