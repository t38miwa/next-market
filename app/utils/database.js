import mongoose from "mongoose";
const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://t38miwa:kinako0325@cluster0.mpborp0.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB");
    }catch(err){
        console.log("Failure: Unconnected to MongoDB");
        throw new Error();
    }
}

export default connectDB;
