import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const { id } = params;
    console.log("id", id);

    if (!id) {
        return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }

    try {
        await prisma.post.delete({
            where: { id },
        });

        return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Failed to delete post:", error);
        if (error instanceof Error && error.message.includes("Record to delete does not exist")) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
    }
}
