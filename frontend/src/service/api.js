import axios from 'axios';

// http://127.0.0.1:3003/user?username=ABC
// http://127.0.0.1:3003/user?pincode_like=517541&&level=Employer
// export const url = "http://localhost:5001";

export const url = "https://lepserver.onrender.com";

export const getOrders = async (username) => {
    return await axios.post(`${url}/api/orders/allorder`, { username });
}

export const getPendingCustomerOrders = async (customer) => {
    return await axios.post(`${url}/api/orders/orderbystatus`, { customer, status: "pending" })
}

export const getCompletedCustomerOrders = async (customer) => {
    return await axios.post(`${url}/api/orders/orderbystatus`, { customer, status: "complete" })
}

export const getCancelledCustomerOrders = async (customer) => {
    return await axios.post(`${url}/api/orders/orderbystatus`, { customer, status: "rejected" });
}

export const postOrder = async (data) => {
    return await axios.post(`${url}/api/orders/booking`, data);
}

export const putCompletedOrder = async (order, status) => {
    return await axios.post(`${url}/api/orders/changestatus`, { order, status });
}

export const putCancelledOrder = async (order, status) => {
    return await axios.post(`${url}/api/orders/changestatus`, { order, status });
}


export const getSearch = async (pincode, skills) => {
    return await axios.post(`${url}/api/find/search`, { pincode, skills });
}

export const verifyEmployer = async (username, otp) => {
    console.log(username, otp);
    return await axios.post(`${url}/api/users/verify-otp/employer`, { username: username, otp: otp });
}

export const verifyEmployee = async (username, otp) => {
    console.log(username, otp);
    return await axios.post(`${url}/api/users/verify-otp/employee`, { username: username, otp: otp });
}



export const getUsers = async (username) => {
    return await axios.post(`${url}/api/users/login`, { username });
    console.log(username);
}

// new change by warmish

export const addUser = async (user) => {
    const formData = new FormData();
    for (const key in user) {
        formData.append(key.toString(), user[key])
        console.log(key.toString(), user[key])
    }

    if (user.level === 'Employer') {
        return await axios.post(`${url}/api/users/employer-registration`, formData)
    }
    else {
        return await axios.post(`${url}/api/users/employee-registration`, formData)
    }
}


export const UpdateEmployee = async (user) => {
    return await axios.post(`${url}/api/users/employee-update`, user);
}



export const UpdateEmployer = async (user) => {
    return await axios.post(`${url}/api/users/employer-update`, user);
}



export const urlA = "http://127.0.0.1:3003/actions";

export const addAction = async (details) => {
    console.log(details)
    return await axios.post(`${url}/api/other/query`, details);
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
