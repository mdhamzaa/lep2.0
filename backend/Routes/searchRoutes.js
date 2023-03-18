import express from "express";
import Employee from '../public/models/employee.js';
import Employer from '../public/models/employer.js';
import Admin from '../public/models/admin.js';

const router = express.Router();


router.route('/search').post(async (req, res) => {

    let searchDetail = null;
    if (!req.body.skills) {
        searchDetail = {
            // pincode: req.body.pincode,

            pincode: { $in: [req.body.pincode] },


        }
    } else {
        searchDetail = {
            // pincode: req.body.pincode,

            pincode: { $in: [req.body.pincode] },

            skills: req.body.skills
        }


    }

    const allemployee = await Employee.find(searchDetail);

    return res
        .status(200)
        .send(allemployee)
});



export default router;