import { NextResponse } from "next/server"
import connectToDB from "@/utils/database";
import Post from "@/models/Post";


export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connectToDB();

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connectToDB();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};