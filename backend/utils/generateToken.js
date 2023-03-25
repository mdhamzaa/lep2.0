
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const generateToken = (id) => {
    return jwt.sign({ id }, "hamza12344", {
        expiresIn: "7d",
    });
};


export default generateToken;