
import mongoose from 'mongoose';


const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/lep', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('DB connection is successful');
    }).catch((eror) => {
        console.log(e);
    });

}

// Practic commit added

export default connectDB;