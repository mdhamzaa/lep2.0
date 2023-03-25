import express from "express";
import Employee from '../public/models/employee.js';
import Employer from '../public/models/employer.js';
import Admin from '../public/models/admin.js';
import nodemailer from 'nodemailer';
const router = express.Router();






router.route('/employee-registration').post(async (req, res) => {
    console.log(req.body)
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
        pay
    } = req.body;

    let obj1 = await Employee.findOne({ username: username })
    let obj2 = await Employer.findOne({ username: username })

    if (obj1 || obj2) {
        return res
            .status(200)
            .send({ message: "User already exists", success: false, obj1, obj2 })
    }

    if (obj1 == null && obj2 == null) {
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
                pay,
                verify: false,
                otp: 9999999

            })

            console.log(registerEmployee);

            const registered = await registerEmployee.save();


            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // use SSL
                auth: {
                    user: "rolex7113@gmail.com",
                    pass: "xsrgnuoqhgrmsejl",
                },
            });

            const OTP = Math.floor(1000 + Math.random() * 9000);
            registerEmployee.otp = OTP;
            await registerEmployee.save();
            let mailOptions = {
                from: "rolex7113@gmail.com",
                to: registered.email,
                subject: 'Nodemailer Project',
                text: `Hi from your nodemailer project  ${OTP}`,
            };

            transporter.sendMail(mailOptions, function (err, data) {
                if (err) {
                    console.log("Error " + err);
                } else {
                    console.log("Email sent successfully");
                }
            });


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
})

router.route('/employer-registration').post(async (req, res) => {
    console.log(req.body)
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
        password
    } = req.body;

    let obj1 = await Employee.findOne({ username: username })
    let obj2 = await Employer.findOne({ username: username })


    if (obj1 || obj2) {
        return res
            .status(200)
            .send({ message: "User already exists", success: false, obj1, obj2 })
    }

    if (obj1 == null && obj2 == null) {
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
                verify: false,
                otp: 9999999
            })

            console.log(registerEmployer);

            const registered = await registerEmployer.save();

            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // use SSL
                auth: {
                    user: "rolex7113@gmail.com",
                    pass: "xsrgnuoqhgrmsejl",
                },
            });

            const OTP = Math.floor(1000 + Math.random() * 9000);
            registerEmployer.otp = OTP;
            await registerEmployer.save();
            let mailOptions = {
                from: "rolex7113@gmail.com",
                to: registered.email,
                subject: 'Nodemailer Project',
                text: `Hi from your nodemailer project  ${OTP}`,
            };

            transporter.sendMail(mailOptions, function (err, data) {
                if (err) {
                    console.log("Error " + err);
                } else {
                    console.log("Email sent successfully");
                }
            });


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

})

router.route('/verify-otp/employer').post(async (req, res) => {
    const username = req.body.username;
    console.log(username);
    try {
        let employee = await Employer.findOne({ username: username.username });
        if (employee != null) {
            if (employee.otp === parseInt(username.otp)) {
                employee.verify = true;
                await employee.save();
                return res
                    .status(200)
                    .send({ message: "User verified successfully", success: true })
            }
            else {
                return res
                    .status(200)
                    .send({ message: "OTP is incorrect", success: false })
            }
        }
        else {
            return res
                .status(200)
                .send({ message: "User not found", success: false })
        }
    }
    catch (err) {
        res.status(400).send('you otp the error');
    }
}
)


router.route('/verify-otp/employee').post(async (req, res) => {
    const username = req.body.username;
    console.log(username);
    try {
        let employee = await Employee.findOne({ username: username.username });
        if (employee != null) {
            if (employee.otp === parseInt(username.otp)) {
                employee.verify = true;
                await employee.save();
                return res
                    .status(200)
                    .send({ message: "User verified successfully", success: true })
            }
            else {
                return res
                    .status(200)
                    .send({ message: "OTP is incorrect", success: false })
            }
        }
        else {
            return res
                .status(200)
                .send({ message: "User not found", success: false })
        }
    }
    catch (err) {
        res.status(400).send('you otp the error');
    }
}
)










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


















router.post("/employee-update", async (req, res) => {

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
        password
    } = req.body;

    var newvalues = {
        $set: {

            fname,
            lname,
            gender,
            dob,
            address,
            pincode,
            phone,
            skills,
            exp,
            password

        }
    };
    const employee = await Employee.updateOne({ username: req.body.username }, newvalues);
    return res
        .status(200)
        .send(employee)

    // console.log(employee);


})









router.post("/employer-update", async (req, res) => {

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
        password
    } = req.body;

    var newvalues = {
        $set: {

            fname,
            lname,
            gender,
            dob,
            address,
            pincode,
            phone,
            password

        }
    };
    const employer = await Employer.updateOne({ username: req.body.username }, newvalues);
    return res
        .status(200)
        .send(employer)

    // console.log(employee);


})




export default router;



