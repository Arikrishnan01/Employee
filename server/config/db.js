import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONGODB CONNECTED`.italic.underline.blue);
    }
    catch(error){
        console.log(`Error is: ${error.message}`.red.bold);
    }
}