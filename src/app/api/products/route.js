
import connectDB from "@/database/db";
import { Product } from "@/database/model/product";
import { NextResponse } from "next/server";



export async function GET(){
    await connectDB()

    const data = await Product.find()
    console.log("Data : " , data)
    return NextResponse.json({success : true, data})
}

export async function POST(){
    await connectDB()
    let newData = new Product({
        name : "ram",
        age : 30000,
        email : "god@gmail.com"
    })
    const result = await newData.save()
    return NextResponse.json({success: true, result})
}