
import jwt from "jsonwebtoken";

const generateToken = (id) => {
    return jwt.sign({ id }, "hamza12344", {
        expiresIn: "7d",
    });
};

export default generateToken;