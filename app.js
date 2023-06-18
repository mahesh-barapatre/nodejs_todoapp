import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddlware } from "./middlewares/error.js";
import cors from "cors";

export const app=express();

config({
    path: "./data/config.env",
});

//Using Middlewares
app.use(express.json()); //to access the json 
app.use(cookieParser());
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET","POST","PUT","DELETE"],
        credentials: true, //help to pass the headers(cookies and data) to frontend
    })
);

///api/v1 - denotes we are using an api
app.use("/api/v1/users", userRouter) //using routes
app.use("/api/v1/task", taskRouter) 

app.get(("/"),(req,res)=>{
    res.send("Nice working")
})
app.get(("/mahesh"),(req,res)=>{
    res.json(
        {
            success : true,
            message : "hi there this is working",
        }
    )
})

//Using error middleware
app.use(errorMiddlware);

