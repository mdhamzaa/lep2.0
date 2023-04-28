import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import maleImg from "../Images/noProfileImgIconMale.png"
import femaleImg from "../Images/noProfileImgIconFemale.png"
import { url } from "../service/api";

export default function ReviewBox() {
  const mountedCheck = true;


  useEffect(() => {
    fetch(`${url}/api/other/allReview`).then((res) => {
      return res.json()
    }).then((data) => {
      // console.log(data)
      setlength(data.length)
      // console.log(length)
      setreviews(data);
    })
  }, [mountedCheck])

  const [reviews, setreviews] = useState([])
  const [length, setlength] = useState(0)

  useEffect(() => {
    let slideBtn1 = document.getElementById("slideBtn1");
    let slideBtn2 = document.getElementById("slideBtn2");
    let reviewCards = document.getElementById("reviewCards");

    slideBtn1.style.display = "none";
    // let n = reviewCards.children.length;
    if (length < 4) {
      slideBtn2.style.display = "none";
    }
    else {
      slideBtn2.style.display = "inline";
    }
    let cnt1 = 0;
    let cnt2 = 0;
    let currEle = 1;

    slideBtn2.addEventListener("click", () => {
      if (cnt1 !== length) {
        cnt1++;
        cnt2--;
        currEle++;
        let translateDis = cnt1 * -32.5;
        reviewCards.style.transform = `translate(${translateDis}vw,0)`;
      }
      if (currEle === length) {
        slideBtn2.style.display = "none";
      }
      if (currEle > 1) {
        slideBtn1.style.display = `inline`;
      }
    });

    slideBtn1.addEventListener("click", () => {
      if (cnt2 !== length) {
        cnt2++;
        cnt1--;
        currEle--;
        let translateDis = cnt2 * 32.1;
        reviewCards.style.transform = `translate(${translateDis}vw,0)`;
      }
      if (currEle > 1) {
        slideBtn1.style.display = "inline";
      }
      if (currEle < length) {
        slideBtn2.style.display = "inline";
      }
      if (currEle === 1) {
        slideBtn1.style.display = "none";
      }
    });
  });

  return (
    <div id="reviewContainer">
      <h1 id="reviewHead">Reviews</h1>
      <div id="reviewCards">
        {
          reviews.map((e) => {
            return <ReviewCard name={e.name} profession={e.profession} stars={e.stars} comment={e.comment} image={e.gender === "male" ? maleImg : femaleImg} />
          })
        }
      </div>

      <span className="slideBtn" id="slideBtn1"></span>
      <span className="slideBtn" id="slideBtn2"></span>
    </div>
  );
}
