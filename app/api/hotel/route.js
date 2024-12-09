import { ConnectDB } from "@/lib/config/db";
import HotelModel from "@/lib/models/HotelModel"; // Adjust this import based on your model
const { NextResponse } = require("next/server");
import { writeFile } from 'fs/promises';
const fs = require('fs');

const LoadDB = async () => {
    await ConnectDB();
};

LoadDB();

// API Endpoint to get all restaurants or a specific one
export async function GET(request) {
    const HotelId = request.nextUrl.searchParams.get("id");
    if (HotelId) {
        const hotel = await HotelModel.findById(HotelId);
        return NextResponse.json(hotel);
    } else {
        const hotels = await HotelModel.find({});
        return NextResponse.json({hotels});
    }
}

//API Endpoint for uploading restaurant information
export async function POST(request) {
    const formData = await request.formData();
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
    await writeFile(path, buffer);
    const imageUrl = `/${timestamp}_${image.name}`;

    const hotelData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        image: `${imageUrl}`,
    };

    await HotelModel.create(hotelData);
    console.log("Hotel data saved");

    return NextResponse.json({ success: true, msg: "Hotel listed" });
}

// Creating API Endpoint to delete a restaurant
// export async function DELETE(request) {
//     const id = await request.nextUrl.searchParams.get('id');
//     const restaurant = await RestaurantModel.findById(id);
//     fs.unlink(`./public${restaurant.image}`, () => { });
//     await RestaurantModel.findByIdAndDelete(id);
//     return NextResponse.json({ msg: "Restaurant Deleted" });
// }
