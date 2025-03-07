import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"

export async function POST(request: { json: () => any; }){
    const res = await request.json()
    const {title, content} = res;
     const result = await prisma.post.create({
        data: {
            title,
            content,
            published: true,
            author: {create: {
                name: 'jas'
            }}
        }
     })

     console.log("result",res)
    return NextResponse.json({res})
}