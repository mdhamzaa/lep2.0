import express from "express";
import Employee from '../public/models/employee.js';
import Employer from '../public/models/employer.js';
import Admin from '../public/models/admin.js';
import nodemailer from 'nodemailer';
import multer from "multer";
import Booking from "../public/models/order.js";
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
 *          Employer:
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
 *                          type: number
 *                      phone:
 *                          type: number
 *                      password:
 *                          type: string
 *                      confirmPassword:
 *                          type: string
 *          
 */


// multer 
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./shared/uploads/images");
    },
    filename: (req, file, callback) => {
        callback(
            null,
            `${new Date().toISOString().replace(/:/g, "_")}-${file.originalname}`
        );
    }
})

const fileFilter = (req, file, callback) => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
    ) {
        callback(null, true);
    } else {
        callback(null, false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter })

/**
 * @swagger
 *  /api/users/employee-registration:
 *      post:
 *          summary: Register an employee
 *          description: This api is to register an employee
 *          tags: [Registration]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              username: 
 *                                  type: string
 *                              level:
 *                                  type: string
 *                              email:
 *                                  type: string
 *                              fname:
 *                                  type: string
 *                              lname:
 *                                  type: string
 *                              gender:
 *                                  type: string
 *                              dob:
 *                                  type: string
 *                              address:
 *                                  type: string
 *                              pincode:
 *                                  type: array
 *                                  items:
 *                                      type: number
 *                              phone:
 *                                  type: number
 *                              skills:
 *                                  type: string
 *                              exp:
 *                                  type: string
 *                              password:
 *                                  type: string
 *                              pay:
 *                                  type: string
 *          responses:
 *              '200':
 *                  description: User created successfully
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                                  success:
 *                                      type: boolean
 *              '400':
 *                  description: Bad request
 */

router.post('/employee-registration', upload.single('pic'), async (req, res) => {
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
        pincode1,
        pincode2,
        pincode3,
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
    let pic = (req.file) ? "imageUpload".concat(req.file?.path
        .toString()
        .replace(/\\/g, "/")
        .split("uploads")
        .slice(1)
        .join("")) : null


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
                pincode: [pincode1, pincode2, pincode3],
                phone,
                skills,
                exp,
                pic,
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

                auth: {
                    user: "rolex7113@gmail.com",
                    pass: "xsrgnuoqhgrmsejl",
                }, tls: {
                    rejectUnauthorized: false
                }
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

/**
 * @swagger
 *  /api/users/employer-registration:
 *      post:
 *          summary: Register an employer
 *          description: This api is to register an employer
 *          tags: [Registration]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              username: 
 *                                  type: string
 *                              level:
 *                                  type: string
 *                              email:
 *                                  type: string
 *                              fname:
 *                                  type: string
 *                              lname:
 *                                  type: string
 *                              gender:
 *                                  type: string
 *                              dob:
 *                                  type: string
 *                              address:
 *                                  type: string
 *                              pincode:
 *                                  type: number
 *                              phone:
 *                                  type: number
 *                              password:
 *                                  type: string
 *          responses:
 *              '200':
 *                  description: User created successfully
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                                  success:
 *                                      type: boolean
 *              '400':
 *                  description: Bad request
 */

router.post('/employer-registration', upload.single('pic'), async (req, res) => {
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
    let pic = (req.file) ? "imageUpload".concat(req.file?.path
        .toString()
        .replace(/\\/g, "/")
        .split("uploads")
        .slice(1)
        .join("")) : null

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
                pic,
                password,
                verify: false,
                otp: 9999999
            })

            console.log(registerEmployer);

            const registered = await registerEmployer.save();

            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,

                auth: {
                    user: "rolex7113@gmail.com",
                    pass: "xsrgnuoqhgrmsejl",
                }, tls: {
                    rejectUnauthorized: false
                }
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

/**
 * @swagger
 *  /api/users/verify-otp/employer:
 *      post:
 *          summary: Verify employer with otp
 *          description: This api is to verify employer with otp
 *          tags: [Verification]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              username:
 *                                  type: object
 *                                  properties:
 *                                      username:
 *                                          type: string
 *                                      otp:
 *                                          type: number
 *          responses:
 *              200:
 *                  description: User register in successfully.
 *              400:
 *                  description: error occured
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 */

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

/**
 * @swagger
 *  /api/users/verify-otp/employee:
 *      post:
 *          summary: Verify employee with otp
 *          description: This api is to verify employee with otp
 *          tags: [Verification]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              username:
 *                                  type: object
 *                                  properties:
 *                                      username: 
 *                                          type: string
 *                                      otp:
 *                                          type: number
 *          responses:
 *              200:
 *                  description: User registered successfully.
 *              400:
 *                  description: error occured
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string

 */


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

/**
 * @swagger
 *  /api/users/login:
 *      post:
 *          summary: Authenticate user and login
 *          description: This api is to authenticate user and login
 *          tags: [Login]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              username:
 *                                  type: string
 *          responses:
 *              200:
 *                  description: User logged in successfully.
 *              400:
 *                  description: error occured
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string

 */

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

router.route('/getEmployee').get(async (req, res) => {
    console.log(req.body)
    const allReview = await Employee.find({});
    return res
        .status(200)
        .send(allReview)

});


router.route('/getEmployer').get(async (req, res) => {
    console.log(req.body)
    const allReview = await Employer.find({});
    return res
        .status(200)
        .send(allReview)

});

router.route('/order').get(async (req, res) => {
    console.log(req.body)
    const allReview = await Booking.find({});
    return res
        .status(200)
        .send(allReview)

});



export default router;



