import axios from 'axios';

// http://127.0.0.1:3003/user?username=ABC
// http://127.0.0.1:3003/user?pincode_like=517541&&level=Employer

const url = "http://127.0.0.1:3003/user";

export const getallDetails = async (key, value) => {

    return await axios.get(`${url}?${key}=${value}`);
}

export const getSearch = async (pincode, skills) => {

    return await axios.get(`${url}?pincode_like=${pincode}&&skills=${skills}`);

}

export const getUsers = async (username) => {

    return await axios.get(`${url}?username=${username}`);
}

export const addUser = async (user) => {
    return await axios.post(url, user);
}

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user);
}


export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}