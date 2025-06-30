import mongoose from "mongoose";
import {DB_NAME} from '../const.js';
export const connectDB = async()=>{
    try{
 await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//  async is used to make sure that the code inside the async function is executed asynchronously.
// asynchronus is the process of executing multiple tasks in parallel, without waiting for each task to complete before moving on to 
//await is used to wait for the promise to resolve before continuing with the next line of code.
console.log("✅Connected to MongoDB");}
catch(error){
    console.log("❌Mongo DB connection failed",error.message);
    process.exit(1);// it terminates the code.
}
}
