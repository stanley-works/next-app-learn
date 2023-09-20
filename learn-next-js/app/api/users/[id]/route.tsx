import { NextRequest, NextResponse } from "next/server";
import schema from "../schema"
import prisma from "@/prisma/client";
interface Params {
    params: { id: string }
}

export async function GET(request: NextRequest, { params: { id } }: Params) {
    const user = await prisma.user.findUnique({where:{id:id}});
    console.log(user)
    if (!user)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })

    return NextResponse.json(user);

}

export async function PUT(request: NextRequest, { params: { id } }: Params) {
    const body = await request.json();    
    const validation = schema.safeParse(body);
    if (!validation.success) 
        return NextResponse.json({ error: validation.error.errors }, { status: 400 })
    const user = await prisma.user.findUnique({where:{id:id}});
    if (!user)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })

    const updatedUser = await prisma.user.update({data:{
        name:body.name,
        email:body.email
    },where:{id:user.id}})

    return NextResponse.json(updatedUser);


}

export const DELETE = async(request:NextRequest,{params:{id}}:Params) => {
    // const body = await request.json();
    const user = await prisma.user.findUnique({where:{id:id}});
    if (!user)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })

    const deletedUser = await prisma.user.delete({where:{id:user.id}})

    return NextResponse.json(`${deletedUser.name} deleted`);
}