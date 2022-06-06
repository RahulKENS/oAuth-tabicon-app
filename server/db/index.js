import mongoose, { connect } from "mongoose";
import { config } from "../utils/config";

const { mongodburl } = config;
const connectDb = async ()=>{
    try {
        mongoose.connect(mongodburl);
        console.log("DB is connected !");
    } catch (error) {
        console.log("db  is not conneted !");
    }
}

export default connectDb;