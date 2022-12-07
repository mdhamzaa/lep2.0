import axios from 'axios';

// http://127.0.0.1:3003/user?username=ABC
// http://127.0.0.1:3003/user?pincode_like=517541&&level=Employer

export const url = "http://127.0.0.1:3003/user";

export const getallDetails = async (key, value) => {

    return await axios.get(`${url}?${key}=${value}`);
}

export const getOrders = async (username) => {
    return await axios.get(`http://127.0.0.1:3003/order?employee=${username}`);
}

export const getPendingCustomerOrders= async(customer)=>{
    return await axios.get(`http://127.0.0.1:3003/order?customer=${customer}&status=pending`)
}

export const getCompletedCustomerOrders= async(customer)=>{
    return await axios.get(`http://127.0.0.1:3003/order?customer=${customer}&status=completed`)
}

export const postOrder = async (data)=>{
    return await axios.post("http://127.0.0.1:3003/order",data);
}

export const putCompletedOrder= async(id)=>{
    const res=await axios.get(`http://127.0.0.1:3003/order/${id}`);
    const order=res.data;
    console.log(order);
    const newOrder={
        ...order,
        status: "completed"
    }
    return await axios.put(`http://127.0.0.1:3003/order/${id}`,newOrder);
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

export const urlA = "http://127.0.0.1:3003/actions";
export const addAction = async (details) => {
    return await axios.post(urlA, details);
}