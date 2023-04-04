import React from 'react'
import { useState } from 'react'
import "../CSS/home.css"
import arrowImg from "../Images/arrow.svg"
import searchImg from "../Images/search-svgrepo-com.svg"
import allImages from '../Images/allBgImages'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SetSearchDetails, selectAllUser } from "../features/userSlice";
import { toast } from "react-toastify";

export default function ImageBg(props) {
    const dispatch = useDispatch();
    let [user, setUser] = useState({});
    user = useSelector(selectAllUser);
    React.useEffect(() => {
        // getallDetail();
        setUser(user);
        // console.log(user.email)
    }, [])



    let navigate = useNavigate();
    const [pincode, setPincode] = useState("");
    const [skill, setSkill] = useState("");

    const seachhandler = () => {
        if(pincode=='' && skill==''){
            toast.error('All fields are empty')
            return;
        }
        dispatch(
            SetSearchDetails({
                pincode: pincode,
                skill: skill

            })
        );
        navigate('/search')
    }

    let totalImages = 9;

    const [ImageUrl, setImageUrl] = useState(allImages[0])
    const [ImageNumber, setImageNumber] = useState(0)

    function handleRightArrowClick() {
        let newNum = (ImageNumber + 1) % totalImages;
        setImageNumber(newNum);
        let url = allImages[newNum];

        console.log(url, ImageNumber);
        let newImg = new Image();

        newImg.onload = function () {
            setImageUrl(newImg.src)
            // imgChange.style.backgroundImage = `url(${newImg.src})`;
        }
        newImg.src = url;
    }

    function handleLeftArrowClick() {
        let newNum = (ImageNumber - 1 + totalImages) % totalImages;
        setImageNumber(newNum);
        let url = allImages[newNum];

        console.log(url, ImageNumber);
        let newImg = new Image();

        newImg.onload = function () {
            setImageUrl(newImg.src)
            // imgChange.style.backgroundImage = `url(${newImg.src})`;
        }
        newImg.src = url;
    }

    return (
        <>
            <div className="bgAnimation" id="imgChange" style={{ backgroundImage: `url(${ImageUrl})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <h1 id="slogan">Opportunities Made Real</h1>
                <div className="arrowContainer">
                    <span id="leftBgChange"><img className="arrowImg" id="leftArrow" src={arrowImg} alt="" onClick={handleLeftArrowClick} /></span>
                    <span id="rightBgChange"><img className="arrowImg" id="rightArrow" src={arrowImg} alt="" onClick={handleRightArrowClick} /></span>
                </div>


                {(user?.level === "Employer" || user === null) &&
                    <div className="inputs">

                        <input type="number" name="pincode" id="pincode" placeholder="Enter Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} pattern="[0-9]{6}"
                            maxLength="6" />
                        <div id="searchDiv"><img id="searchIcon" src={searchImg} />
                            <input type="text" name="skills" id="search" placeholder="Search for services..." value={skill} onChange={(e) => setSkill(e.target.value)} />

                        </div>

                        <input type="submit" onClick={seachhandler} value="Search" id="searchSubmit" />


                    </div>

                }

            </div>
        </>
    )
}
