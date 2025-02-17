
import mongoose from "mongoose";

const productModel=new mongoose.Schema({
    name : String , 
    age : Number,
    email: String,
})

export const Product = mongoose.models.users || mongoose.model("users" , productModel)