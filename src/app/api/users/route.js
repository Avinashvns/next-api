import { NextResponse } from "next/server";

export function GET(request) {
    return NextResponse.json(
        {
            name : "avi",
            age: 30,
            city: "varanasi"
        },
        {
            status: 200
        }
    )
}