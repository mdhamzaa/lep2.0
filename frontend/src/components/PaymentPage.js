import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



// function limit(event){
//     const val = document.getElementById("cardnumber").value;
//     if(val.length != 12){
//         alert("Enter 12 digit card number");
//         event.preventDefault();
//     }
// }

function PaymentPage() {
    const [name, setName] = useState("");
    const [nameonc, setNameonc] = useState("");
    // const [email, setEmail] = useState("");
    // const [address, setAddress] = useState("");
    // const [dob, setDob] = useState("");
    // const [gender, setGender] = useState("Male");
    const [cardno, setCardno] = useState("");
    const [cvc, setCvc] = useState("");
    const [expmonth, setExpmonth] = useState("");
    const [expyear, setExpyear] = useState("");
    const [amount, setAmount] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {


        toast.success("Payment Successful");
        navigate("/");
    }

    return (
        <>
            <div className="f-screen  bg-slate-200">
                <div className="flex items-center justify-center">
                    <div className="w-1/3 p-1 mt-40 max-w-lg h- full bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
                        <div className="space-y-6">
                            <h1 className="text-xl font-medium text-gray-900">Payment Form</h1>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        htmlFor="name"
                                        className="mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeHolder="Name"
                                        required=""
                                    />

                                </div>

                                <div className="w-full md:w-1/2 px-3">

                                    <label
                                        htmlFor="lname"
                                        className="mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Name On Card
                                    </label>
                                    <input
                                        type="text"
                                        name="nameonc"
                                        id="nameonc"
                                        value={nameonc}
                                        onChange={(e) => setNameonc(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeHolder="Name on card"
                                        required=""
                                    />
                                </div>
                            </div>
                            {/* <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="abc@x.com"
                                required=""
                            />
                        </div> */}
                            {/* <div>
                            <label
                                htmlFor="address"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeHolder="City / State"
                                required=""
                            />
                        </div> */}

                            {/* <div className="relative">
                            <label
                                htmlFor="dob"
                                className="mb-2 text-sm font-medium text-gray-900"
                            >
                                Date of Birth:
                            </label>
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="mt-6 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="date" id="date" name="date" value={dob} onChange={(e) => setDob(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " />
                        </div>

                        <div className="flex">
                            <label className="text-sm font-medium text-gray-900 mr-3">Gender :</label>
                            <div className="flex items-center mr-3">
                                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    <input
                                        type="radio"
                                        value="Male"
                                        name="Gender"
                                        // onChange={this.onValueChange}

                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                    Male
                                </label>
                            </div>
                            <div className="flex items-center mr-3">
                                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    <input
                                        type="radio"
                                        value="Female"
                                        name="Gender"
                                        onChange={(e) => setGender(e.target.value)}

                                    />
                                    Female
                                </label>
                            </div>
                            <div className="flex items-center mr-3">
                                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    <input
                                        type="radio"
                                        value="Other"
                                        name="Gender"
                                        onChange={(e) => setGender(e.target.value)}

                                    />
                                    Other
                                </label>
                            </div>

                        </div> */}

                            <div>
                                <label
                                    htmlFor="cardno"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Card Number
                                </label>
                                <input
                                    type="number"
                                    name="Cardno"
                                    id="Cardno"
                                    value={cardno}
                                    onChange={(e) => setCardno(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Card Number 1111-2222-3333-4444"
                                    // onClick={limit(e)}
                                    required=""
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="cvc"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Card CVV
                                </label>
                                <input
                                    type="number"
                                    name="Card_cvc"
                                    id="Card_cvc"
                                    value={cvc}
                                    onChange={(e) => setCvc(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Card CVC 123"
                                    required=""
                                />
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        htmlFor="fname"
                                        className="mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Expiry Month
                                    </label>
                                    <input
                                        type="number"
                                        name="exp_month"
                                        id="exp_month"
                                        value={expmonth}
                                        onChange={(e) => setExpmonth(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeHolder="MM"
                                        required=""
                                    />

                                </div>

                                <div className="w-full md:w-1/2 px-3">

                                    <label
                                        htmlFor="expyear"
                                        className="mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Expiry Year
                                    </label>
                                    <input
                                        type="number"
                                        name="exp_year"
                                        id="exp_year"
                                        value={expyear}
                                        onChange={(e) => setExpyear(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeHolder="YYYY"
                                        required=""
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="amount"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Amount
                                </label>
                                <input
                                    type="number"
                                    name="amount"
                                    id="amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Enter Amount"
                                    required=""
                                />
                            </div>
                            <br></br>
                            <div className="flex text-sm font-medium text-gray-500 ">

                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                    onClick={() => handleSubmit()}
                                >
                                    Pay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage;