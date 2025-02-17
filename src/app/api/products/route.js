
import connectDB from "@/database/db";
import { Product } from "@/database/model/product";
import { NextResponse } from "next/server";



export async function GET(){
    await connectDB()

    const data = await Product.find()
    console.log("Data : " , data)
    return NextResponse.json({success : true, data})
}

export async function POST(request){
    await connectDB()
    const payload = await request.json()
    let newData = new Product(payload)
    const result = await newData.save()
    return NextResponse.json({success: true, result})
}