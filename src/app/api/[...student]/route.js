import { NextResponse } from "next/server";

export async function GET(request , content){
    const studentDetails = content.params.student?.slice(1)
    console.log(studentDetails)
    return NextResponse.json({result: studentDetails},{status: 200})
}