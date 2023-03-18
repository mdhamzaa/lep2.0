// import img from "https://i.ibb.co/G9DC8S0/404-2.png"

import "../CSS/Checkout.css"

import { Link } from "react-router-dom";
import SuccessImage from "../Images/Success4.jpg";
function Success() {

    return (
        <div className="CoverContainer">

            <div className="ContaintCancel">
                <div>
                    <img className="ThankYouSuccess" src={SuccessImage} />
                </div>

                <div className="">
                    <div className="items-center flex justify-center flex-col">
                        <h1 className="mb-2 text-gray-800 font-bold text-2xl items-center flex justify-center flex-col">
                            Thank You.Your Payment Is Successful
                        </h1>
                        <p className="mb-2 text-gray-800 flex items-center justify-center flex-col">For More Details You Can Go to Home Page</p>
                        <Link to='/' className="mb-16 mt-2 sm:w-20 lg:w-auto border rounded md py-2.5 px-8 text-center bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">Home Page</Link>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}



export default Success;