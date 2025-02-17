
import connectDB from "@/database/db";
import { Product } from "@/database/model/product";
import { NextResponse } from "next/server";



export async function GET(){
    await connectDB()

    const data = await Product.find()
    console.log("Data : " , data)
    return NextResponse.json({result : true, data})
}