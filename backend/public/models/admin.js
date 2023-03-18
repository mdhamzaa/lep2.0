
import mongoose from 'mongoose';



const adminScema = new mongoose.Schema(
    {

        username: {
            type: String

        },
        password: {
            type: String
        }

    },




)

const Admin = new mongoose.model("Admin", adminScema);
export default Admin;