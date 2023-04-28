import express from "express";
import Employee from '../public/models/employee.js';
import Employer from '../public/models/employer.js';
import Admin from '../public/models/admin.js';
import Booking from '../public/models/order.js';
import Query from '../public/models/query.js';
import Review from '../public/models/review.js'
import client from "../Redis/redis.js";





const router = express.Router();

/**
 * @swagger
 *  components:
 *      schemas:
 *          review:
 *                  type: object
 *                  properties:
 *                      name:
 *                          type: string
 *                      profession:
 *                          type: string
 *                      gender:
 *                          type: string
 *                      comment:
 *                          type: string
 *                      stars:
 *                          type: number
 *          query:
 *                  type: object
 *                  properties:
 *                      FirstName:
 *                          type: string
 *                      Email:
 *                          type: string
 *                      Subject:
 *                          type: string
 *                      Message:
 *                          type: string
 *                      Status:
 *                          type: string
 *                  
 */

/**
 * @swagger
 * /api/other/allReview:
 *  get:
 *      summary: To get all the reviews
 *      tags: [Review]
 *      description: This api is to fetch data from reviews model from mongoDB
 *      responses:
 *          200:
 *              description: This api is to fetch data from reviews model from mongoDB
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#/components/schemas/review'
 * 
 */


router.route('/allReview').get(async (req, res) => {


    console.log(req.body)

    // const cachedData = await client.get('allReview');
    // if (cachedData) {
    //     console.log('serving from cache');
    //     return res
    //         .status(200)
    //         .send(JSON.parse(cachedData))
    // }
    // else {
    const allReview = await Review.find({});

    // await client.set('allReview', JSON.stringify(allReview));
    return res
        .status(200)
        .send(allReview)
    // }

});



/**
 * @swagger
 * /api/other/allQuery:
 *  get:
 *      summary: To get all the queries
 *      tags: [Query]
 *      description: This api is to fetch data from query model from mongoDB
 *      responses:
 *          200:
 *              description: This api is to fetch data from query model from mongoDB
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#/components/schemas/query'
 * 
 */

router.route('/allQuery').get(async (req, res) => {

    const allQuery = await Query.find({});
    return res
        .status(200)
        .send(allQuery)

});

/**
 * @swagger
 * /api/other/query:
 *  post:
 *      summary: To send a query
 *      tags: [Query]
 *      description: This api is to send a query 
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/query'
 *                  
 *      responses:
 *          200:
 *              description: Added successfully
 *              content:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  success:
 *                                      type: boolean
 *          400:
 *              description: Bad request
 * 
 */

router.route('/query').post(async (req, res) => {

    const {
        FirstName,
        Email,
        Phone,
        Message,
        Subject,
        Status
    } = req.body;

    const query = new Query({
        FirstName,
        Email,
        Phone,
        Message,
        Subject,
        Status
    })

    const registered = await query.save();
    console.log(registered);
    return res
        .status(200)
        .send({ success: true })
});

export default router;