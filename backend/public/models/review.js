
import mongoose from 'mongoose';



const reviewScema = new mongoose.Schema(
    {

        username: {
            type: String

        },
        password: {
            type: String
        }

    },




)

const Review = new mongoose.model("Review", reviewScema);
export default Review;