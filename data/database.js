import mongoose from "mongoose";

//to connect with mongodb/mongoose
export const connectDB = () =>{
mongoose
    .connect(process.env.MONGO_URI,{
        dbName: "backendapi"
    })
    .then((c)=>console.log(`Database Connected with ${c.connection.host} `))
    .catch((e)=>console.log(e));
};

