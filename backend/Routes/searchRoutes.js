import express from "express";
import Employee from '../public/models/employee.js';
import Employer from '../public/models/employer.js';
import Admin from '../public/models/admin.js';
import client from "../Redis/redis.js";

const router = express.Router();

/**
 * @swagger
 *  components:
 *      schemas:
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
 * /api/find/search:
 *   post:
 *      summary: Search for employees
 *      tags: [Employee]
 *      description: This api is to search for employees
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          pincode:
 *                              type: string
 *                          skills:
 *                              type: string
 *                  
 *      responses:
 *          200:
 *              description: Succefully fetched employee details
 *              content:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Employee'
 *          404:
 *              description: Employee not found
 * 
 */

router.route('/search').post(async (req, res) => {

    let searchDetail = null;


    if (!req.body.skills || req.body.skills == '') {

        searchDetail = {
            // pincode: req.body.pincode,

            pincode: { $in: [req.body.pincode] },


        }
    } else if (!req.body.pincode || req.body.pincode == '') {
        const regex = new RegExp(req.body.skills, 'i');

        searchDetail = {
            // pincode: req.body.pincode,


            skills: { $regex: regex }
        }
    }
    else {
        const regex = new RegExp(req.body.skills, 'i');
        searchDetail = {
            // pincode: req.body.pincode,

            pincode: { $in: [req.body.pincode] },

            skills: { $regex: regex }
        }


    }

    // const cachedData = await client.get(`${req.body.skills}`);
    // if (cachedData) {
    //     console.log('serving from cache');
    //     return res
    //         .status(200)
    //         .send(JSON.parse(cachedData))
    // }
    // else {
    const allemployee = await Employee.find(searchDetail);
    // await client.set(`${req.body.skills}`, JSON.stringify(allemployee));
    return res
        .status(200)
        .send(allemployee)
    // }
});



export default router;