
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import { useNavigate, useParams } from "react-router-dom";
// import { getUsers } from '../service/api';
import { useSelector } from "react-redux";
import { selectAllUser } from '../features/userSlice.js'
import { url } from '../service/api.js';


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

function Profile() {
    let [user, setUser] = useState({});
    const [image, setImage] = useState('');
    const getallDetail = async () => {
        // const user = JSON.parse(localStorage.getItem('user'));

        // const data = await getUsers(username);
        // console.log(data.data[0])
        setUser(user);
        setImage(user.pic);

    }
    user = useSelector(selectAllUser);
    React.useEffect(() => {
        // getallDetail();
        setUser(user);
        // console.log(user.email)
    }, [])


    let navigate = useNavigate();
    console.log(url + image)

    return (
        <div style={{ position: 'absolute', top: "8vw" }}>
            <div style={{ backgroundColor: 'rgb(226,232,240)' }}>
                <Stack direction="row" spacing={2} style={{ scale: '3', marginLeft: '63vw' }}>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                        variant="dot"
                    >
                        <Avatar style={{ marginTop: '6vh' }} alt={user.fname} src={user.pic ? `${url}/${user.pic}` : "https://i.ibb.co/6BcDTmn/dp.jpg"} />
                    </StyledBadge>
                </Stack>
                <Rating name="read-only" value={3} readOnly style={{ marginLeft: '36vw', marginTop: '15vh', scale: '1.5' }} />
            </div>
            <div className="f-screen  bg-slate-200" style={{ width: '90vw' }}>

                <div className="flex items-center justify-center p-9">
                    <div className="w-full  mt-4 h- full bg-white rounded-lg border border-gray-200 shadow-md sm:p-9 lg:p-8">
                        <form className="space-y-6">
                            <h5 className="text-xl font-medium text-gray-900">
                                User Information
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
                                    value={user.username}

                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    disabled
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
                                    value={user.email}

                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    disabled
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
                                        value={user.fname}

                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        disabled
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
                                        value={user.lname}

                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        disabled
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
                                    value={user.address}

                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    disabled
                                />
                            </div>




                            {/* <div className="flex flex-wrap -mx-3 mb-2">

                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">

                                    <label
                                        htmlFor="pincode"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Pincode 1
                                    </label>
                                    <input
                                        type="number"
                                        name="pincode1"
                                        id="pincode1"
                                        value={user.pincode[0]}

                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        disabled
                                    />

                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                        htmlFor="pincode2"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Pincode 2
                                    </label>
                                    <input
                                        type="number"
                                        name="pincode2"
                                        id="pincode2"
                                        value={user.pincode[1]}

                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        disabled
                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                        htmlFor="pincode3"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Pincode 3
                                    </label>
                                    <input
                                        type="number"
                                        name="pincode3"
                                        id="pincode3"


                                        value={user.pincode[2]}

                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeHolder="9045464576"
                                        disabled
                                    />

                                </div>
                            </div> */}




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
                                <input type="date" id="date" name="date" value={user.dob} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " disabled />
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

                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    value={user.phone}
                                    disabled
                                />
                            </div>




                            {user.level === "Employee" && <>
                                <div>
                                    <label
                                        htmlFor="skills"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Skills
                                    </label>
                                    <input
                                        type="text"
                                        name="skills"
                                        id="skills"
                                        value={user.skills}

                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeHolder="Carpenter"
                                        disabled
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="exp"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Experiance
                                    </label>
                                    <input
                                        type="text"
                                        name="exp"
                                        id="exp"
                                        value={user.exp}

                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeHolder="like 1 Year"
                                        disabled
                                    />
                                </div>


                            </>
                            }

                            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={
                                () => {
                                    if (user.level == 'Employee') {
                                        navigate('/dashboard/updateEmployee')

                                    } else {
                                        navigate('/dashboard/updateEmployer')
                                    }
                                }
                            }>Update</button>

                        </form>
                    </div >
                </div >
            </div >
        </div>
    )

}

export default Profile;
