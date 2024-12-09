import mongoose from 'mongoose';

// Define the schema for the hotel
const hotelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Create the Hotel model
const HotelModel = mongoose.models.hotel || mongoose.model('hotel', hotelSchema);

export default HotelModel;

// Function to create a new hotel entry
export async function createHotelData({ title, description, image }) {
    // Connect to the MongoDB database
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // Create a new hotel instance with the provided data
    const newHotelData = new HotelModel({
        title,
        description,
        image
    });

    // Save the new hotel data to the database
    const result = await newHotelData.save();
    return result;
}
