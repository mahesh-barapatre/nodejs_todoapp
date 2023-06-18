import mongoose from "mongoose";

    //structure of the data storage
const schema = new mongoose.Schema({
    
    title:{
        type : String,
        required:true,
    },
    description:{
        type : String,
        required:true,
    },
    isCompleted:{
        type: String,
        default : false,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required : true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});    

//setting-up collection
export const Task = mongoose.model("Task",schema);