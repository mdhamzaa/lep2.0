
import mongoose from 'mongoose';



const reviewScema = new mongoose.Schema(
    {

        name: {
            type: String

        },
        profession: {
            type: String
        },
        gender: {
            type: String
        },
        comment: {
            type: String
        },
        stars: {
            type: Number
        }

    },




)

const Review = new mongoose.model("Review", reviewScema);
export default Review;