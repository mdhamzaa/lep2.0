
import mongoose from 'mongoose';


const employeeSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: true
    },

    level: {
        type: String
    },

    email: {
        type: String
    },
    fname: {
        type: String
    },
    lname: {
        type: String
    },

    gender: {
        type: String
    },

    dob: {
        type: String
    },

    address: {
        type: String
    },

    pincode: {
        type: Array
    },
    phone: {
        type: Number
    },

    skills: {
        type: String
    },

    exp: {
        type: String
    },
    pic:{
        type : String
    },
    password: {
        type: String
    },
    confirmPassword: {
        type: String
    },
    pay: {
        type: String
    },
    verify: {
        type: Boolean
    },
     otp:{
        type: Number
    }
})



const Employee = new mongoose.model("Employee", employeeSchema);

export default Employee;