

import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
const{NextResponse} = require("next/server");
import {writeFile} from 'fs/promises';
const fs= require('fs');


const LoadDB=async () =>{
    await ConnectDB();
}

LoadDB();
//API Endpoint to get all blogs//

export async function GET(request) {

    const blogId = request.nextUrl.searchParams.get("id");
    if(blogId){
        const blog= await BlogModel.findById(blogId);
        return NextResponse.json(blog);
    }else{
        const blogs = await BlogModel.find({});
        return NextResponse.json({blogs})
    }

    
}

//API Endpoint for uploading blogs//

export async function POST(request) {
const formData=await request.formData();
const timestamp = Date.now();

const image = formData.get('image');
if (!image) {
    return NextResponse.json({ success: false, msg: "No image uploaded" });
}

// Convert image to buffer
const imageBuffer = Buffer.from(await image.arrayBuffer());
const imageByteData = await image.arrayBuffer();
const buffer = Buffer.from(imageByteData);
const path = `./public/${timestamp}_${image.name}`;
await writeFile(path,buffer);
const imageUrl =`/${timestamp}_${image.name}`;

const blogData = {
    title: `${formData.get('title')}`,
    description: `${formData.get('description')}`,
    category: `${formData.get('category')}`,
    author: `${formData.get('author')}`,
    image: `${imageUrl}`,
    authorImg: `${formData.get('authorImg')}`, // Handle similarly if it's an image
};

await BlogModel.create(blogData);
console.log("Blog saved")

return NextResponse.json({success:true,msg:"Blog added"})
}

//Creating API Endpoint to delete blog 
 export async function DELETE(request){
    const id=await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    fs.unlink(`./public${blog.image}`, ()=>{});
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"Blog Deleted"})

 }