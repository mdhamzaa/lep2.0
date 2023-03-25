
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UpdateEmployer } from "../service/api";
import bcrypt from "bcryptjs-react";
import { toast } from "react-toastify";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import { useDispatch, useSelector } from "react-redux";
import { selectAllUser } from '../features/userSlice.js'
import { SetLogin } from "../features/userSlice";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));

function RegisterEmployee() {

    let [usr, setUsr] = useState({});
    usr = useSelector(selectAllUser);
    useEffect(() => {
        // getallDetail();
        setUsr(usr);

        console.log(usr)
    }, [])

    const [username, setUsername] = useState(usr.username);
    const [email, setEmail] = useState(usr.email);
    const [level, setLevel] = useState("Employer");
    const [fname, setFname] = useState(usr.fname);
    const [lname, setLname] = useState(usr.lname);
    const [gender, setGender] = useState(usr.gender);
    const [dob, setDob] = useState(usr.dob);
    const [pincode, setPincode] = useState(usr.pincode);
    const [phone, setPhone] = useState(usr.phone);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState(usr.address);
    let navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});


    const [user, setUser] = useState({});

    let dispatch = useDispatch();


    const register = async () => {
        if (Object.keys(formErrors).length === 0) {
            const hashedpassword = bcrypt.hashSync(user.password, 10);
            let newdata = await UpdateEmployer({ ...user, password: hashedpassword, confirmPassword: hashedpassword });
            console.log(newdata)
            dispatch(
                SetLogin({
                    user: { ...user, password: hashedpassword, confirmPassword: hashedpassword }

                })
            );
            toast.success("User Updated Successfully");
            navigate("/");
        }
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
            if (age < 1) {
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









    const handleSubmit = async () => {

        // console.log(username, email, fname, lname, level, address, gender, dob, pincode, pincode2, pincode3, skills, exp, phone, password, confirmPassword);
        // skills = skills.toLowerCase();
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
            password: password,
            confirmPassword: confirmPassword

        }

        setUser(user);
        setFormErrors(validate(user));



    }
    return (
        <div style={{ position: 'absolute', top: "6vw" }}>
            <div style={{ backgroundColor: 'rgb(226,232,240)' }}>
                <Stack direction="row" spacing={2} style={{ scale: '3', marginLeft: '63vw' }}>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                        variant="dot"
                    >
                        <Avatar style={{ marginTop: '6vh' }} alt="Aemy Sharp" src="https://i.ibb.co/6BcDTmn/dp.jpg" />
                    </StyledBadge>
                </Stack>
                <Rating name="read-only" value={3} readOnly style={{ marginLeft: '36vw', marginTop: '15vh', scale: '1.5' }} />
            </div>


            <div className="f-screen  bg-slate-200" style={{ width: '90vw' }}>

                <div className="flex items-center justify-center p-9">
                    <div className="w-full  mt-4 h- full bg-white rounded-lg border border-gray-200 shadow-md sm:p-9 lg:p-8">
                        <div className="space-y-6">
                            <h5 className="text-xl font-medium text-gray-900" >
                                Register Employee
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
                                    placeHolder="abcd"
                                    disabled
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
                                    disabled
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
                                    className={formErrors.phone ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"}
                                    placeHolder="9045464576"
                                    required=""

                                />
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.phone}</p>
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
                                    Update
                                </button>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </div>
    )

}

export default RegisterEmployee;
