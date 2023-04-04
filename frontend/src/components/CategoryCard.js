import React from "react";
import { getSearch } from "../service/api";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SetSearchDetails, selectAllUser } from "../features/userSlice";

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
