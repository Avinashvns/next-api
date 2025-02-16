import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
    const data=user
    console.log("Data ",content.params.id);
    const userData=user.filter((item)=>item.id==content.params.id)
   return NextResponse.json(
    userData.length==0?{result:`No Data Found ID: ${content.params.id}`} : {result : userData[0], success:true},
    {status: 200})
}

export async function PUT(request,content){
    let payload = await request.json()
    payload.id = content.params.id
    console.log(payload.id)

    let missing = [];
    if (!payload.name) missing.push("name");
    if (!payload.age) missing.push("age");
    if (!payload.email) missing.push("email");

    if(missing.length){
        return NextResponse.json({result : `Missing: ${missing.join(", ")}` , success: false},{status: 400})
    }
    return NextResponse.json({result:payload, success: true}, {status: 200})
}