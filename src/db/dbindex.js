import mongoose from "mongoose";
import { DB_NAME } from "../const.js";
import dotenv from "dotenv";

dotenv.config({
  path:'./.env'
})

const connectDB = async () => {
    try{
      const connectiondata =   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log(`mongoDB connected!! DB_host: ${connectiondata.connection.host}`)
    }catch(error){
        console.log("error in connecting to database",error)
        process.exit(1)
    }
}

export default connectDB;