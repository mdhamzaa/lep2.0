import React, { useEffect } from "react";
import ReviewCard from "./ReviewCard";

export default function ReviewBox() {
 

  useEffect(() => {
    let slideBtn1 = document.getElementById("slideBtn1");
    let slideBtn2 = document.getElementById("slideBtn2");
    let reviewCards = document.getElementById("reviewCards");

    slideBtn1.style.display = "none";
    let n = reviewCards.children.length;
    if(n<4){
      slideBtn2.style.display="none";
    }
    let cnt1 = 0;
    let cnt2 = 0;
    let currEle = 1;

    slideBtn2.addEventListener("click", () => {
      if (cnt1 != n) {
        cnt1++;
        cnt2--;
        currEle++;
        let translateDis = cnt1 * -32.5;
        reviewCards.style.transform = `translate(${translateDis}vw,0)`;
      }
      if (currEle == n) {
        slideBtn2.style.display = "none";
      }
      if (currEle > 1) {
        slideBtn1.style.display = `inline`;
      }
    });

    slideBtn1.addEventListener("click", () => {
      if (cnt2 != n) {
        cnt2++;
        cnt1--;
        currEle--;
        let translateDis = cnt2 * 32.1;
        reviewCards.style.transform = `translate(${translateDis}vw,0)`;
      }
      if (currEle < n) {
        slideBtn2.style.display = "inline";
      }
      if (currEle == 1) {
        slideBtn1.style.display = "none";
      }
    });
  });

  return (
    <div id="reviewContainer">
      <h1 id="reviewHead">Reviews</h1>
      <div id="reviewCards">
        <ReviewCard name="temp" profession="temp" stars={3} />
        <ReviewCard name="temp" profession="temp" stars={3} />
        <ReviewCard name="temp" profession="temp" stars={3} />
        <ReviewCard name="temp" profession="temp" stars={3} />
       
      </div>

      <span className="slideBtn" id="slideBtn1"></span>
      <span className="slideBtn" id="slideBtn2"></span>
    </div>
  );
}
