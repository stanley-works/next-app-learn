import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

interface User{
    name:string
    email:string
}
export async function GET(request:NextRequest){
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request:NextRequest){
    const body:User = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json({error:validation.error.errors},{status:400})
    }
    const user = await prisma.user.findUnique({
        where:{email:body.email}
    })
    if(user)
     return NextResponse.json({error:"Email already Exist"},{status:400})

    const newUser = await prisma.user.create({
        data:{
            name:body.name,
            email:body.email,
        }
    })

    return NextResponse.json(`${newUser.name} has been created`,{status:201});
}