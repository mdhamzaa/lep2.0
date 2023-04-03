import express from "express";
import Employee from '../public/models/employee.js';
import Employer from '../public/models/employer.js';
import Admin from '../public/models/admin.js';
import Booking from '../public/models/order.js';


const router = express.Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          Booking:
 *                  type: object
 *                  properties:
 *                      employee:
 *                          type: string
 *                      customer:
 *                          type: string
 *                      date:
 *                          type: string
 *                          format: date
 *                      timeslot:
 *                          type: string
 *                      status:
 *                          type: string
 *          Employee:
 *                  type: object
 *                  properties:
 *                      username:
 *                          type: string
 *                      level:
 *                          type: string
 *                      email:
 *                          type: string
 *                      fname:
 *                          type: string
 *                      lname:
 *                          type: string
 *                      gender:
 *                          type: string
 *                      dob:
 *                          type: string
 *                      address:
 *                          type: string
 *                      pincode:
 *                          type: array
 *                      phone:
 *                          type: number
 *                      skills:
 *                          type: string
 *                      exp:
 *                          type: string
 *                      password:
 *                          type: string
 *                      confirmPassword:
 *                          type: string
 *                      pay:
 *                          type: string
 */

/**
 * @swagger
 * /api/orders/booking:
 *   post:
 *      summary: To send booking details
 *      tags: [Booking]
 *      description: This api is to send booking details
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          employee:
 *                              type: string
 *                          customer:
 *                              type: string
 *                          date:
 *                              type: string
 *                              format: date
 *                          timeslot:
 *                              type: string
 *                  
 *      responses:
 *          200:
 *              description: Added successfully
 * 
 */

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

/**
 * @swagger
 * /api/orders/allorder:
 *   post:
 *      summary: Retrieve all bookings of an employee
 *      tags: [Booking]
 *      description: This api is to retrieve all bookings of an employee
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          username:
 *                              type: string
 *                  
 *      responses:
 *          200:
 *              description: Retrieved all booking of the empoyee
 *              content:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Booking'
 * 
 */

router.route('/allorder').post(async (req, res) => {

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    // define the condition for documents to 
    console.log(yesterday)
    const condition = { date: { $lt: yesterday }, status: "pending" };
    var newvalues = {
        $set: {
            status: "rejected"
        }
    }
    // delete documents that match the condition
    Booking.updateMany(condition, newvalues, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Documents updated successfully.");
        }
    });


    console.log(req.body)
    const book = await Booking.find({ employee: req.body.username });
    return res
        .status(200)
        .send(book)

})

/**
 * @swagger
 * /api/orders/changestatus:
 *   post:
 *      summary: Update booking status
 *      tags: [Booking]
 *      description: This api is to Update booking status
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          order:
 *                              type: object
 *                              properties:
 *                                  employee:
 *                                      type: string
 *                                  timeslot:
 *                                      type: string
 *                          status:
 *                              type: string
 *                  
 *      responses:
 *          200:
 *              description: Updated booking status
 *              content:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Booking'
 *          404:
 *              description: Booking not found
 * 
 */

router.route('/changestatus').post(async (req, res) => {
    const order = req.body.order;
    const status = req.body.status;
    var newvalues = {
        $set: {
            status
        }
    }

    const book = await Booking.updateOne({ employee: order.employee, timeslot: order.timeslot }, newvalues);
    console.log(book)

    return res
        .status(200)
        .send(book)

})

/**
 * @swagger
 * /api/orders/orderbystatus:
 *   post:
 *      summary: Get bookings by status and customer
 *      tags: [Booking]
 *      description: This api is to Get bookings by status and customer
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          customer:
 *                              type: string
 *                          status:
 *                              type: string
 *                  
 *      responses:
 *          200:
 *              description: Fetched successfully
 *              content:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Booking'
 *          404:
 *              description: Booking not found
 * 
 */

router.route('/orderbystatus').post(async (req, res) => {



    // console.log(req.body)
    const book = await Booking.find({ customer: req.body.customer, status: req.body.status });
    return res
        .status(200)
        .send(book)

})

/**
 * @swagger
 * /api/orders/getUser:
 *   post:
 *      summary: Get user by id
 *      tags: [Employee]
 *      description: This api is to get user by id
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: string
 *                  
 *      responses:
 *          200:
 *              description: Fetched successfully
 *              content:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Employee'
 *          404:
 *              description: Employee not found
 * 
 */

router.route('/getUser').post(async (req, res) => {

    let searchDetail = null;

    const employee = await Employee.findById(req.body.id);

    return res
        .status(200)
        .send({ data: employee })
});












export default router;
