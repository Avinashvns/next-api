import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request) {
    const data=user;
    return NextResponse.json(

        data,
        {
            status: 200
        }
    )
}

export async function POST(request){
    let payload = await request.json()
    console.log(payload.name)

    let missing = [];
    if (!payload.name) missing.push("name");
    if (!payload.age) missing.push("age");
    if (!payload.email) missing.push("email");

    if(missing.length){
        return NextResponse.json({result : `Missing: ${missing.join(", ")}` , success: false},{status: 400})
    }
    return NextResponse.json({result : "new user created" , success: true},{status: 201})
}