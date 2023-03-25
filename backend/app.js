
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


app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/find', searchRoutes);
app.use('/api/other', otherRoutes)




app.listen(5001, () => {
    console.log("Server is started at 5001");
})

