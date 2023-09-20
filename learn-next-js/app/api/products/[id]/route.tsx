import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";
interface Product{
    name:string,
    price:number
}

interface Props{
    params:{id:string}
}
export async function PUT(request:NextRequest,{params:{id}}:Props){
    const body:Product = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json({error:validation.error.errors},{status:400})
    }
    const product = await prisma.products.update({data:{
        name:body.name,
        price:body.price
    },where:{id:id}})
    return NextResponse.json(`${product.name} updated`);
}

export async function DELETE(request:NextRequest,{params:{id}}:Props){
    const products = await prisma.products.findUnique({where:{id:id}});    
    if(!products)
        return NextResponse.json({error:"Product not found"},{status:404})
    
    await prisma.products.delete({where:{id:products.id}})
    
    
    return NextResponse.json({});
}