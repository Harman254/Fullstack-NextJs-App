import { NextResponse } from "next/server"
import connectToDB from "@/utils/database";
import Post from "@/models/Post";

// GET /api/posts


export const GET = async(request) => {
  const url = new URL(request.url)
  const username = url.searchParams.get("username");
  
  try {
    await connectToDB();
    const posts = await Post.find(username && { username })
    return new NextResponse(JSON.stringify(posts), {status: 200})
    
  } catch (error) {
    console.log('Error:', error);
    
    return new NextResponse('Database Error', {status: 500})
  }
  


}
export const POST = async(request) => {
  const body = await request.json(); 
  const newPost = new Post(body)
  
  try {
    await connectToDB();

    await newPost.save()

    
    return new NextResponse("Post has been created", {status: 201})
    
  } catch (error) {
    console.log('Error:', error);
    
    return new NextResponse('Database Error', {status: 500})
  }
  


}