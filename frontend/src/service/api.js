import axios from 'axios';

// http://127.0.0.1:3003/user?username=ABC
// http://127.0.0.1:3003/user?pincode_like=517541&&level=Employer

export const url = "http://127.0.0.1:3003/user";

export const url2 = "http://localhost:5000";


export const getOrders = async (username) => {
    return await axios.post('/api/orders/allorder', { username });
}

export const getPendingCustomerOrders = async (customer) => {
    return await axios.post('/api/orders/orderbystatus', { customer, status: "pending" })
}

export const getCompletedCustomerOrders = async (customer) => {
    return await axios.post('/api/orders/orderbystatus', { customer, status: "completed" })
}

export const postOrder = async (data) => {
    return await axios.post("/api/orders/booking", data);
}

export const putCompletedOrder = async (order) => {
    return await axios.post("/api/orders/changestatus", order);
}


export const getSearch = async (pincode, skills) => {
    return await axios.post('/api/find/search', { pincode, skills });
}

export const verifyEmployer = async (username,otp) => {
    console.log(username,otp);
    return await axios.post(`http://localhost:5001/api/users/verify-otp/employer`, {username:username,otp:otp});
}

export const verifyEmployee = async (username,otp) => {
    console.log(username,otp);
    return await axios.post(`http://localhost:5001/api/users/verify-otp/employee`, {username:username,otp:otp});
}



export const getUsers = async (username) => {
    return await axios.post(`/api/users/login`, { username });
    console.log(username);
}

export const addUser = async (user) => {
    if(user.level === 'Employer'){
    return await axios.post("/api/users/employer-registration", user)}
    else{
        return await axios.post("/api/users/employee-registration", user)
    }
}

export const urlA = "http://127.0.0.1:3003/actions";

export const addAction = async (details) => {
    return await axios.post(urlA, details);
}




// export const postOrder = async (data) => {
//     return await axios.post("http://127.0.0.1:3003/order", data);
// }

// export const getSearch = async (pincode, skills) => {
//     if (skills) {
//         return await axios.get(`${url}?pincode_like=${pincode}&&skills=${skills}`);
//     } else {
//         return await axios.get(`${url}?pincode_like=${pincode}&&level=Employee`);
//     }
// }

// export const getUsers = async (username) => {

//     return await axios.get(`${url}?username=${username}`);
// }

// export const getOrders = async (username) => {
//     return await axios.get(`http://127.0.0.1:3003/order?employee=${username}`);
// }


// export const getPendingCustomerOrders = async (customer) => {
//     return await axios.get(`http://127.0.0.1:3003/order?customer=${customer}&status=pending`)
// }

// export const getCompletedCustomerOrders = async (customer) => {
//     return await axios.get(`http://127.0.0.1:3003/order?customer=${customer}&status=completed`)
// }
