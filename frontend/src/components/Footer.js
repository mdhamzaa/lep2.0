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
                    alt="" /></span>
                <span id="social">
                    <h4>Social Links</h4>
                    <div id="linksContainer">
                        <a href="#" className="socialLinks"><img src={youtubeIcon} alt="" /></a>
                        <a href="#" className="socialLinks"><img src={twitterIcon} alt="" /></a>
                        <a href="#" className="socialLinks"><img src={facebookIcon} alt="" /></a>
                    </div>
                </span>
            </div>
        </footer>
    )
}

