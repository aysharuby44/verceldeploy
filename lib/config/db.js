import mongoose from "mongoose";

export const ConnectDB =async ()=>{
     await mongoose.connect('mongodb+srv://rubyrelish:Diamond_44@cluster0.xsvp5.mongodb.net/blog-app')
       console.log("DB connected");
    }