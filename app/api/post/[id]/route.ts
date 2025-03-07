import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(
    request: Request, 
    context: { params: { id: string } }
) {
    const { params } = context;  
    const id = params.id;  

    console.log('params', id);

    if (!id) {
        return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }

    try {
        await prisma.post.delete({
            where: { id }
        });
        return NextResponse.json({ message: "Post deleted successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
    }
}
