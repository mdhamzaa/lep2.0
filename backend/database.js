
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();



const url = process.env.MongodbURL;
// console.log(process.env.MongodbURL)

const connectDB = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('DB connection is successful');
    }).catch((e) => {
        console.log(e);
    });
}

// this is also done bt akhil

// Practic commit added

export default connectDB;