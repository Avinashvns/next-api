import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
    const data=user
    console.log("Data ",content.params.id);
    const userData=user.filter((item)=>item.id==content.params.id)
   return NextResponse.json(
    userData.length==0?{result:`No Data Found ID: ${content.params.id}`} : {result : userData, success:true},
    {status: 200})
}