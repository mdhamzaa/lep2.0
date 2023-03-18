
import mongoose from 'mongoose';



const bookingSchema = new mongoose.Schema(
    {
        employee: {
            type: String

        },
        customer: {
            type: String

        },
        date: {
            type: Date,

        },
        timeslot: {
            type: String,

        },
        status: {
            type: String,

            enum: ['pending', 'completed', 'rejected'],
            default: 'pending'
        }

    },




)

const Booking = new mongoose.model("Booking", bookingSchema);


export default Booking;