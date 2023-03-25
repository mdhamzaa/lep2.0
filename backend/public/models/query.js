
import mongoose from 'mongoose';



const queryScema = new mongoose.Schema(
    {

        FirstName: {
            type: String

        },
        Email: {
            type: String
        },
        Subject: {
            type: String
        },
        Messege: {
            type: String
        },
        Status: {
            type: String
        },


    },




)

const Query = new mongoose.model("Query", queryScema);
export default Query;