
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../service/api";
function RegisterEmployer() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [level, setLevel] = useState("Employee");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [gender, setGender] = useState("Male");
    const [dob, setDob] = useState("");
    const [pincode, setPincode] = useState("");
    const [phone, setPhone] = useState("");
    // const [skills, setSkills] = useState("");
    // const [Exp, setExp] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    let navigate = useNavigate();








    const handleSubmit = async () => {

        console.log(username, email, fname, lname, level, address, gender, dob, pincode, phone, password, confirmPassword);

        const user = {
            username: username,
            email: email,
            fname: fname,
            lname: lname,
            level: level,
            address: address,
            gender: gender,
            dob: dob,
            pincode: pincode,
            phone: phone,
            password: password

        }
        await addUser(user);
        navigate("/");

    }
    return (

        <div className="f-screen  bg-slate-200">

            <div className="flex items-center justify-center">
                <div className="w-1/3 p-1 mt-40 max-w-lg h- full bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
                    <div className="space-y-6">
                        <h5 className="text-xl font-medium text-gray-900">
                            Register Employer
                        </h5>

                        <div>
                            <label
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeHolder="abc@x.com"
                                required=""
                            />
                        </div>

                        <div>
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
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    htmlFor="fname"
                                    className="mb-2 text-sm font-medium text-gray-900"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="fname"
                                    id="fname"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeHolder="Your first name"
                                    required=""
                                />

                            </div>

                            <div className="w-full md:w-1/2 px-3">

                                <label
                                    htmlFor="lname"
                                    className="mb-2 text-sm font-medium text-gray-900"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lname"
                                    id="lname"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeHolder="Your last name"
                                    required=""
                                />
                            </div>







                        </div>


                        <div>
                            <label
                                htmlFor="address"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                address
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
                        </div>




                        <div>
                            <label
                                htmlFor="pincode"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Pincode
                            </label>
                            <input
                                type="number"
                                name="pincode"
                                id="pincode"
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeHolder="9045464576"
                                required=""
                            />
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

                        </div>

                        <div className="relative">
                            <label
                                htmlFor="dob"
                                className="mb-2 text-sm font-medium text-gray-900"
                            >
                                Date of Birth:
                            </label>
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="mt-6 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </div>
                            {/* <input type="Date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeHolder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeHolder="Select date"> */}
                            <input type="date" id="date" name="date" value={dob} onChange={(e) => setDob(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " />
                        </div>




                        <div>
                            <label
                                htmlFor="phone"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Phone Number
                            </label>
                            <input
                                type="number"
                                name="phone"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeHolder="9045464576"
                                required=""
                            />
                        </div>










                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeHolder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                required=""
                            />
                        </div>


                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeHolder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                required=""
                            />
                        </div>

                        <div className="flex text-sm font-medium text-gray-500 ">

                            <button
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                onClick={() => handleSubmit()}
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )

}

export default RegisterEmployer;