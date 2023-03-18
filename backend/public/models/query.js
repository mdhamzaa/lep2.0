
import mongoose from 'mongoose';



const queryScema = new mongoose.Schema(
    {

        username: {
            type: String

        },
        password: {
            type: String
        }

    },




)

const Query = new mongoose.model("Query", queryScema);
export default Query;