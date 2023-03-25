

import { useState } from 'react';
import '../App.css';
// import profile from '../Images/dummyImg.png'
// import searchImg from '../Images/search.svg'
import { getSearch } from "../service/api";
import SearchResult from './SearchResult';
import noData from '../Images/noDataImg.png'
import Modal from './Modal';
import { useEffect } from 'react';
import { DelSearchDetails, selectAllDetails } from '../features/userSlice';
import { useDispatch, useSelector } from "react-redux";


function Search(props) {
    const [isSearch, setIsSearch] = useState(false)
    const [pincode, setPincode] = useState("");
    const [skill, setSkill] = useState("");
    const [user, setUser] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [currEmployee, setCurrEmployee] = useState('')
    // const [currPincode,setCurrPincode]= useState('');
    const search = useSelector(selectAllDetails);
    // console.log(search.pincode)
    const dispatch = useDispatch();
    useEffect(() => {
        if (search) {
            setPincode(search.pincode)
            
            setSkill(search.skill)
            seachhandlers(search.pincode, search.skill);
            dispatch(DelSearchDetails());
        }
    }, [search])
    const seachhandler = async () => {
        const d = await getSearch(pincode, skill);
        console.log(d.data);
        setUser(d.data);
        setIsSearch(true);

    }
    const seachhandlers = async (pincode, skill) => {
        const d = await getSearch(pincode, skill);
        console.log(d.data);
        setUser(d.data);
        setIsSearch(true);

    }
    return (
        <>

            <div id="searchImgBox">
                <span id="searchImgBoxHead">
                    <h2>Showing Search Results for&#160;&#160;&#160;</h2>
                    <h1> "&#160; {skill} &#160;{pincode}  &#160;"</h1>
                </span>
            </div>
            {/* <img src={searchImg} id='wave' /> */}



            <div id="contentContainer" className='bg-slate-300'>

                <div id="searchHead">
                    <span className="searchBox"><span className="searchText">Pincode: </span>
                        <input className="searchInput" type="number" value={pincode} onChange={(e) => setPincode(e.target.value)} /></span>
                    <span className="searchBox"><span className="searchText">Service: </span>
                        <input className="searchInput" type="text" value={skill} onChange={(e) => setSkill(e.target.value)} /></span>
                    <button onClick={seachhandler} id="searchBtn">Search</button>
                </div>

                <div id="content">

                    <div id="searchResults" className='bg-slate-100'>
                        <h3>Search Results:</h3>

                        <div id="resultCards">


                            {

                                user.map((data, i) => (
                                    <SearchResult data={data} setModalIsOpen={setModalIsOpen} key={i} setCurrEmployee={setCurrEmployee} />
                                ))
                            }

                            {user.length === 0 && isSearch &&
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
                {modalIsOpen && <Modal setModalIsOpen={setModalIsOpen} employee= {currEmployee} pincode={pincode} />}
            </div>




        </>

    )

}

export default Search;