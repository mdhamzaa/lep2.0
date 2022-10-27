// import styles from '../styles/search.module.css'
import axios from 'axios';
import { useState } from 'react';
import '../App.css';
import profile from '../Images/dummyImg.png'
import searchImg from '../Images/search.svg'
import { getSearch } from "../service/api";
import { editUser, getallUsers } from '../service/api';



function Search() {

    const [pincode, setPincode] = useState("");
    const [skill, setSkill] = useState("");
    const [user, setUser] = useState([]);

    const seachhandler = async () => {
        const d = await getSearch(pincode, skill);
        // try {
        //     const data = await axios.get("http://127.0.0.1:3003/user/");
        //     console.log(data.data);

        // } catch (err) {
        //     console.log(err);
        // }
        console.log(d.data);
        setUser(d.data);
    }
    return (
        <div>

            <div id="searchImgBox">
                <span id="searchImgBoxHead">
                    <h2>Showing Search Results for&#160;&#160;&#160;</h2>
                    <h1> "&#160;skills&#160;"</h1>
                </span>
            </div>




            <div id="contentContainer">

                <div id="searchHead">
                    <span class="searchBox"><span class="searchText">Pincode: </span>
                        <input class="searchInput" type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} /></span>
                    <span class="searchBox"><span class="searchText">Service: </span>
                        <input class="searchInput" type="text" value={skill} onChange={(e) => setSkill(e.target.value)} /></span>
                    <button onClick={seachhandler} id="searchBtn">Search</button>
                </div>







                <div id="content">

                    <div id="searchResults">
                        <h3>Search Results:</h3>

                        <div id="resultCards">
                            {/* <% if(userData.length!=0){ userData.forEach(function(data){%> */}
                            {

                                user.map((data) => (
                                    <div class="resultCard">
                                        <div class="userIntro">
                                            <img class='profileImg' src={profile} alt="****" />
                                            <div class="userNp">
                                                <span class="userName">{data.username}</span>
                                                <span class="profession">{data.skills}</span>
                                            </div>
                                        </div>
                                        <div class="employeeDetails">
                                            <span class="experience"><span class="ques">Experience : </span><span class="ans">{data.exp}</span></span>

                                            <span class="pincodes"><span class="ques">Available in areas(Pincodes) : </span><span
                                                class="ans">{`${data.pincode[0]},${data.pincode[1]},${data.pincode[2]}`}</span></span>
                                        </div>
                                        <div class="book">
                                            <button type="submit" class="bookBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Hire</button>
                                        </div>
                                    </div>
                                ))
                            }
                            {/* <%  }) %> <% } else{ %> */}
                            {/* <div id="notFound">
                                    <h4 id="noDataHead">No Data Found</h4>
                                    <img src="/Images/noDataImg.png" alt="" id="noDataImg" />
                                    <% } %> */}

                        </div>

                    </div>
                </div>
            </div>



        </div>

    )

}

export default Search;