import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";
interface Product{
    name:string,
    price:number
}
export async function GET(request:NextRequest){
    const products = await prisma.products.findMany();
    return NextResponse.json(products);
}

export async function POST(request:NextRequest){
    const body:Product = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json({error:validation.error.errors},{status:400})
    }
    const product = await prisma.products.create({data:{
        name:body.name,
        price:body.price
    }})
    return NextResponse.json(`${product.name} has been added`,{status:201});
}
