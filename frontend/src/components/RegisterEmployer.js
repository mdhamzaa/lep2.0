
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../service/api";
import bcrypt from "bcryptjs-react";
import { toast } from "react-toastify";
import { verifyEmployer } from "../service/api";

function RegisterEmployer() {
    let navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [level] = useState("Employer");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [pincode, setPincode] = useState("");
    const [phone, setPhone] = useState("");
    const [pic, setPic] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [user, setUser] = useState({});
    const [verify, setVerify] = useState(false);

 const getOtp = async () => {
   let otp= prompt("Enter OTP");
    return  otp;
 }
  
    const register = async () => {
        if (Object.keys(formErrors).length === 0) {
            const hashedpassword = bcrypt.hashSync(user.password, 10);
            await addUser({ ...user, password: hashedpassword, confirmPassword: hashedpassword });
            const otp = await getOtp();
             verifyEmployer({ username:username, otp:otp}).then((res) => {
                if (res.data.success === true) {
                    toast.success("User Registered Successfully");
                    navigate("/login");
                } else {
                    toast.error("User Registration Failed");
                }
            });}
        }

    useEffect(
        () => {
            register();
        }, [user]);


    const validate = (values) => {
        const errors = {};

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";

        } else if (values.username.length <= 2 || values.username.length > 20) {
            errors.username = "Username length should be from 3 to 19";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 8) {
            errors.password = "Password must be more than 8 characters";
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = "Required";
            console.log(values.confirmPassword);
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Password does not Match"
            console.log(values.confirmPassword);
        }

        if (!values.fname) {
            errors.fname = "First name is required"
        }
        if (!values.lname) {
            errors.lname = "Last name is required"
        }
        if (!values.address) {
            errors.address = "Address is required"
        }
        if (!values.gender) {
            errors.gender = "Gender is is required"
        }
        if (!values.dob) {
            errors.dob = "Date of Birth is required"
        } else {


            const ageDifMs = Date.now() - new Date(values.dob).getTime();
            const ageDate = new Date(ageDifMs);
            const age = Math.abs(ageDate.getUTCFullYear() - 1970);
            if (age < 18) {
                errors.dob = "Date of Birth should be greater than 18 for registering the website"
            }
            // console.log(age);


        }
        if (!values.pincode) {
            errors.pincode = "Pincode is required"

        } else if (values.pincode.length !== 6) {
            errors.pincode = "Pincode length can only be six"
        }
        if (!values.phone) {
            errors.phone = "Phone is required"
        } else if (values.phone.length !== 10) {
            errors.phone = "Phone length can only be 10"
        }


        return errors;
    };

    const imageUpload = (e) =>{
        setPic(e.target.files[0])
        console.log(e.target.files);
    }
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
            pic: pic,
            password: password,
            confirmPassword: confirmPassword,
            verify: false,
            otp:999999
        }
        setUser(user);
        setFormErrors(validate(user));
    }
    return (

        <div className="bg-slate-200">

            <div className="flex  justify-center">
                <div className="w-5/12 p-10 mt-[9.5rem] mb-5 h-full bg-white rounded-lg border border-gray-200 shadow-md">
                    <div className="space-y-4">
                        <h5 className="text-xl font-medium text-gray-900" >
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

                                className={formErrors.username ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                                placeHolder="abc@x.com"
                                required=""
                            />
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.username}</p>
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
                                className={formErrors.email ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                                placeholder="abc@x.com"
                                required=""
                            />
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.email}</p>
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
                                    className={formErrors.fname ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                                    placeHolder="Your first name"
                                    required=""
                                />
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.fname}</p>

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
                                    className={formErrors.lname ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                                    placeHolder="Your last name"

                                    required=""
                                />
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.lname}</p>
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
                                className={formErrors.address ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                                placeHolder="City / State"
                                required=""
                            />
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.address}</p>
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
                                onChange={(e) => {
                                    if (e.target.value.length > e.target.maxLength) {
                                        e.target.value = e.target.value.slice(0, e.target.maxLength);
                                        setPincode(e.target.value)
                                    } else {

                                        setPincode(e.target.value)
                                    }
                                }}
                                maxLength='6'
                                className={formErrors.pincode ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                                placeHolder="400612"

                                required=""
                            />
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.pincode}</p>
                        </div>



                        <div>
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
                                <br />
                            </div>
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.gender}</p>


                        </div>
                        <div className="relative">
                            <label
                                htmlFor="dob"
                                className="mb-2 text-sm font-medium text-gray-900"
                            >
                                Date of Birth:
                            </label>
                            {/* <div className="flex mr-5 absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="mt-5 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </div> */}
                            {/* <input type="Date" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeHolder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeHolder="Select date"> */}
                            <input type="date" id="date" name="date" value={dob} onChange={(e) => setDob(e.target.value)} className={formErrors.dob ? " bg-red-50 border border-red-500 text-red-900 placeholder-red-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"} />
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.dob}</p>
                        </div>




                        <div>
                            <label
                                htmlFor="phone"
                                className="mb-2 text-sm font-medium text-gray-900"
                            >
                                Phone Number
                            </label>
                            <input
                                type="number"
                                name="phone"
                                id="phone"
                                value={phone}
                                onChange={(e) => {
                                    if (e.target.value.length > e.target.maxLength) {
                                        e.target.value = e.target.value.slice(0, e.target.maxLength);
                                        setPhone(e.target.value)
                                    } else {

                                        setPhone(e.target.value)
                                    }
                                }}
                                maxLength='10'
                                className={formErrors.phone ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"}
                                placeHolder="9045464576"
                                required=""
                            />
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.phone}</p>
                        </div>





                        <div>
                            <label
                                htmlFor="profile"
                                className="mb-2 text-sm font-medium text-gray-900"
                            >
                                Profile Pic
                            </label>
                            <input
                                type="file"
                                name="pic"
                                id="profile"
                                onChange ={
                                    imageUpload
                                }

                                className={formErrors.pic ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                                // placeHolder="100"
                            //     // required=""

                            />
                            {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.pay}</p> */}
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

                                className={formErrors.password ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                                required=""
                            />
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.password}</p>
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
                                className={formErrors.confirmPassword ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                                required=""
                            />
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.confirmPassword}</p>
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