import mongoose from "mongoose";
import { DB_NAME } from "./const.js";
import dotenv from "dotenv";
import connectDB from "./db/dbindex.js";
dotenv.config({
    path:"./.env"
})


connectDB();


/*

import express from "express";
const app = express();
( async()=>{
    try {
     await mongoose.connect(`${process.env.MOONGO_URI}/${DB_NAME}`)
     app.on("error",(error)=>{
        console.log("error",error);
        throw error
     })

     app.listen(process.env.PORT,()=>{
        console.log(`Appp is listening on Port${process.env.PORT}`);
     })
    } catch (error) {
        console("there is an error :",error);
        throw error
    }
})()
*/