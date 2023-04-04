
// core Modules
import userRoutes from "./Routes/userRoutes.js"
import orderRoutes from "./Routes/orderRoutes.js"
import searchRoutes from "./Routes/searchRoutes.js"

import otherRoutes from "./Routes/otherRoutes.js"
import { fileURLToPath } from 'url';
import path from 'path';
import express from "express";
import cors from "cors";
import database from './database.js';
import Employee from './public/models/employee.js';
import Employer from './public/models/employer.js';
import Booking from './public/models/order.js';
import Admin from './public/models/admin.js';
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import rfs from "rotating-file-stream"
import rateLimit from "express-rate-limit"
import helmet from "helmet";

database();

const app = express();

// this change made by warmish
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/imageUpload", express.static(path.join(__dirname, "../shared/uploads")));


app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use("/imageUpload", express.static(path.join(__dirname, "../shared/uploads")));
app.use(cors());

// This change is made by akhil

// another change
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'LEP SWAGGER API',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:5001'
            }
        ]
    },
    apis: ['./Routes/*.js']
}



const swaggerSpecs = swaggerJsdoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs))

const accessLogStream = rfs.createStream("access.log", {
    interval: "1h",
    path: path.join(__dirname, "../logs"),
});


app.use(morgan("combined", { stream: accessLogStream }));


const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 100 // limit each IP to 100 requests per minute
});

// Apply the rate limiter to all requests
app.use(limiter);
app.use(helmet());

app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/find', searchRoutes);
app.use('/api/other', otherRoutes)






app.listen(5001, () => {
    console.log("Server is started at 5001");
})

