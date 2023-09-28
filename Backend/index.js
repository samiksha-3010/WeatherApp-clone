import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors())
app.use(morgan("dev"))
dotenv.config()

app.get("/",(req,res)=>{
    res.send("Working...")
})


mongoose.connect(process.env.Mongo_URL).then(()=>{
    console.log("Console.log")
})
app.listen(8000,()=>{
    console.log("Listing on port 8000")
})
