import axios from 'axios';

// http://127.0.0.1:3003/user?username=ABC
// http://127.0.0.1:3003/user?pincode_like=517541&&level=Employer

const url = "http://127.0.0.1:3003/user";

export const getallDetails = async (key, value) => {

    return await axios.get(`${url}?${key}=${value}`);
}

export const getSearch = async (pincode, skills) => {
    if (skills) {
        return await axios.get(`${url}?pincode_like=${pincode}&&skills=${skills}`);
    } else {
        return await axios.get(`${url}?pincode_like=${pincode}&&level=Employee`);
    }
}

export const getUsers = async (username) => {

    return await axios.get(`${url}?username=${username}`);
}

export const addUser = async (user) => {
    return await axios.post(url, user);
}
