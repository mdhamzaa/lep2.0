import React from 'react'
import { useState } from 'react'
import "../CSS/home.css"
import arrowImg from "../Images/arrow.svg"
import searchImg from "../Images/search-svgrepo-com.svg"
import allImages from '../Images/allBgImages'
import { getSearch } from '../service/api'
import { useNavigate } from 'react-router-dom'



export default function ImageBg(props) {



    let navigate = useNavigate();


    const seachhandler = () => {

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

                <div className="inputs">

                    <input type="number" name="pincode" id="pincode" placeholder="Enter Pincode" pattern="[0-9]{6}"
                        maxLength="6" />
                    <div id="searchDiv"><img id="searchIcon" src={searchImg} />
                        <input type="text" name="skills" id="search" placeholder="Search for services..." />

                    </div>

                    <input type="submit" onClick={seachhandler} value="Search" id="searchSubmit" />


                </div>

            </div>
        </>
    )
}
