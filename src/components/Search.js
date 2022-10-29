

import { useState } from 'react';
import '../App.css';
import profile from '../Images/dummyImg.png'
import searchImg from '../Images/search.svg'
import { getSearch } from "../service/api";
import SearchResult from './SearchResult';
import noData from '../Images/noDataImg.png'
import Modal from './Modal';



function Search() {

    const [pincode, setPincode] = useState("");
    const [skill, setSkill] = useState("");
    const [user, setUser] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false)
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
                    <h1> "&#160;{skill}&#160;"</h1>
                </span>
            </div>
            {/* <img src={searchImg} id='wave' /> */}



            <div id="contentContainer">

                <div id="searchHead">
                    <span className="searchBox"><span className="searchText">Pincode: </span>
                        <input className="searchInput" type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} /></span>
                    <span className="searchBox"><span className="searchText">Service: </span>
                        <input className="searchInput" type="text" value={skill} onChange={(e) => setSkill(e.target.value)} /></span>
                    <button onClick={seachhandler} id="searchBtn">Search</button>
                </div>







                <div id="content">

                    <div id="searchResults">
                        <h3>Search Results:</h3>

                        <div id="resultCards">


                            {

                                user.map((data, i) => (
                                    <SearchResult data={data} setModalIsOpen={setModalIsOpen} key={i} />
                                ))
                            }
                            {user.length === 0 &&
                                <div id="notFound">
                                    <h4 id="noDataHead">No Data Found</h4>

                                    <img src={noData} alt="" id="noDataImg" />

                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>

            <div id="ModelContair">
                {modalIsOpen && <Modal setModalIsOpen={setModalIsOpen} />}
            </div>





        </div>

    )

}

export default Search;