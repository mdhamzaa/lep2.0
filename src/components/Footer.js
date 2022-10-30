import React from 'react'
import youtubeIcon from "../Images/youtube.svg"
import twitterIcon from "../Images/twitter.svg"
import facebookIcon from "../Images/facebook.svg"
import upImage from "../Images/up.png"

export default function Footer() {
  return (
    <footer id="foot">
        <div id="footContainer">
            <span id="footBrand">
                <h4>LEP</h4>
                <span id="trademark"> &#169; Local Employment Portal</span>
            </span>
            <span id="bttContainer"><a id="backToTop" href="#imgChange">Back to Top</a><img id="up" src={upImage}
                    alt="" srcset=""/></span>
            <span id="social">
                <h4>Social Links</h4>
                <div id="linksContainer">
                    <a href="#" class="socialLinks"><img src={youtubeIcon} alt="" srcset=""/></a>
                    <a href="#" class="socialLinks"><img src={twitterIcon} alt="" srcset=""/></a>
                    <a href="#" class="socialLinks"><img src={facebookIcon} alt="" srcset=""/></a>
                </div>
            </span>
        </div>
    </footer>
  )
}

