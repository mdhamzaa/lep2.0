import { Link } from "react-router-dom";
import Failed from "../Images/failed_payment.jpg";
function Cancel() {

    return (

        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="mb-8 text-gray-800 font-bold text-2xl">
                              OOPS!!. Your Payment Is Failed
                            </h1>
                            <p className="mb-8 text-gray-800">Sorry about that! Please Try again after some time or go to Checkout Page.</p>
                            <Link to='/checkout' className="my-8 sm:w-full lg:w-auto border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</Link>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div>
                <img src={Failed} />
            </div>
        </div>
    )
}



export default Cancel;