import express from "express";
import Employee from '../public/models/employee.js';
import Employer from '../public/models/employer.js';
import Admin from '../public/models/admin.js';
import Booking from '../public/models/order.js';
import Query from '../public/models/query.js';
import Review from '../public/models/review.js'



const router = express.Router();


router.route('/allReview').get(async (req, res) => {
    console.log(req.body)
    const allReview = await Review.find({});
    return res
        .status(200)
        .send(allReview)

});


router.route('/allQuery').get(async (req, res) => {

    const allQuery = await Query.find({});
    return res
        .status(200)
        .send(allQuery)

});

router.route('/query').post(async (req, res) => {

    const {
        FirstName,
        Email,
        Phone,
        Message,
        Status
    } = req.body;

    const review = new Review({
        FirstName,
        Email,
        Phone,
        Message,
        Status
    })

    const registered = await review.save();
    console.log(registered);
    return res
        .status(200)
        .send({ success: true })
});

export default router;