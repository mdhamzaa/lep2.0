import express from "express";
import Employee from '../public/models/employee.js';
import Employer from '../public/models/employer.js';
import Admin from '../public/models/admin.js';
const router = express.Router();

router.route('/employee-registration').post(async (req, res) => {
    // console.log(req.body)
    const {
        username,
        level,
        email,
        fname,
        lname,
        gender,
        dob,
        address,
        pincode,
        phone,
        skills,
        exp,
        password,
        pay,
        confirmPassword
    } = req.body;

    let obj1 = await Employee.findOne({ username: username })
    let obj2 = await Employer.findOne({ username: username })

    if (obj1 || obj2) {
        return res
            .status(200)
            .send({ message: "User already exists", success: false })
    }

    if (obj1 == null && obj2 == null) {
        if (level == Employee) {
            try {
                const registerEmployee = new Employee({
                    username,
                    level,
                    email,
                    fname,
                    lname,
                    gender,
                    dob,
                    address,
                    pincode,
                    phone,
                    skills,
                    exp,
                    password,
                    pay
                })

                console.log(registerEmployee);

                const registered = await registerEmployee.save();
                console.log(registered);
                return res
                    .status(200)
                    .send({ message: "User created successfully", success: true })
            }
            catch (error) {
                console.log(error)

                return res
                    .status(500)
                    .send({ message: "Error creating user", success: false, error })
            }
        }
        else {
            try {
                const registerEmployer = new Employer({
                    username,
                    level,
                    email,
                    fname,
                    lname,
                    gender,
                    dob,
                    address,
                    pincode,
                    phone,
                    password,


                })

                console.log(registerEmployer);

                const registered = await registerEmployer.save();
                console.log(registered);
                return res
                    .status(200)
                    .send({ message: "User created successfully", success: true })
            }
            catch (error) {
                console.log(error)

                return res
                    .status(500)
                    .send({ message: "Error creating user", success: false, error })
            }
        }

    }
})




router.post("/login", async (req, res) => {
    try {
        const thisUsername = req.body.username;


        const employer = await Employer.findOne({ username: thisUsername });
        const employee = await Employee.findOne({ username: thisUsername });
        // console.log(employee);
        const admin = await Admin.findOne({ username: thisUsername });
        if (admin != null) {

            return res
                .status(200)
                .send([admin])
        }


        if (employee == null && employer == null) {
            return res
                .status(200)
                .send([]);
        }
        if (employee != null) {


            // const token = generateToken(employee._id)
            res
                .status(200)
                .send([employee])




        } else if (employer != null) {

            // const token = generateToken(employer._id)
            res
                .status(200)
                .send([employer])


        }



    }
    catch (err) {
        res.status(400).send('you hava the error');
    }



})

export default router;



