import mongoose from "mongoose";

    //structure of the data storage
const schema = new mongoose.Schema({
    name: String,
    email:{
        type : String,
        unique:true,
    },
    password:{
        type: String,
        select : false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});    

//setting-up collection
export const User = mongoose.model("User",schema);