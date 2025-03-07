import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) { 
    try {
        const { title, content } = await request.json();

        const result = await prisma.post.create({
            data: {
                title,
                content,
                published: true,
                author: {
                    create: {
                        name: "jas",
                    },
                },
            },
        });

        return NextResponse.json({ result }, { status: 201 }); 
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create post" },
            { status: 500 }
        ); 
    }
}
