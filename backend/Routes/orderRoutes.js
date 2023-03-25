import express from "express";
import Employee from '../public/models/employee.js';
import Employer from '../public/models/employer.js';
import Admin from '../public/models/admin.js';
import Booking from '../public/models/order.js';


const router = express.Router();

router.route('/booking').post(async (req, res) => {

    const {
        employee,
        customer,
        timeslot,
        date
    } = req.body;

    const booking = new Booking({
        employee,
        customer,
        date,
        timeslot
    })

    const registered = await booking.save();
    console.log(registered);
    return res
        .status(200)
        .send({ success: true })
});


router.route('/allorder').post(async (req, res) => {
    console.log(req.body)
    const book = await Booking.find({ employee: req.body.username });
    return res
        .status(200)
        .send(book)

})

router.route('/changestatus').post(async (req, res) => {
    console.log(req.body)
    const status = 'complete';
    var newvalues = {
        $set: {
            status
        }
    }

    const book = await Booking.updateOne({ employee: req.body.employee, timeslot: req.body.timeslot }, newvalues);
    console.log(book)

    return res
        .status(200)
        .send(book)

})


router.route('/orderbystatus').post(async (req, res) => {
    // console.log(req.body)
    const book = await Booking.find({ customer: req.body.customer, status: req.body.status });
    return res
        .status(200)
        .send(book)

})

router.route('/getUser').post(async (req, res) => {

    let searchDetail = null;

    const employee = await Employee.findById(req.body.id);

    return res
        .status(200)
        .send({ data: employee })
});












export default router;
