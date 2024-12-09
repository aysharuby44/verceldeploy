import mongoose from 'mongoose';

// Define the schema for the restaurant
const restaurantSchema = new mongoose.Schema({
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

// Create the Restaurant model
const RestaurantModel = mongoose.models.restaurant || mongoose.model('restaurant', restaurantSchema);

export default RestaurantModel;

// Function to create a new restaurant entry
export async function createRestaurantData({ title, description, image }) {
    // Connect to the MongoDB database
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // Create a new restaurant instance with the provided data
    const newRestaurantData = new RestaurantModel({
        title,
        description,
        image
    });

    // Save the new restaurant data to the database
    const result = await newRestaurantData.save();
    return result;
}
