// import img from "https://i.ibb.co/G9DC8S0/404-2.png"

import "../CSS/Checkout.css"

import { Link } from "react-router-dom";
import Failed from "../Images/failed_payment.jpg";
function Cancel() {

    return (
        <div className="CoverContainer">

            <div className="ContaintCancel">
                <div>
                    <img className="ThankYouCancel" src={Failed} />
                </div>

                <div className="">
                    <div className="items-center flex justify-center flex-col">
                        <h1 className="mb-2 text-gray-800 font-bold text-2xl items-center flex justify-center flex-col">
                            OOPS!!. Your Payment Is Failed
                        </h1>
                        <p className="mb-2 text-gray-800 flex items-center justify-center flex-col">Please Try again after some time or go to Checkout Page.</p>
                        <Link to='/checkout' className="mb-16 mt-2 sm:w-20 lg:w-auto border rounded md py-2.5 px-8 text-center bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">Go To Checkout</Link>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}



export default Cancel;