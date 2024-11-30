import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

export const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_URI);
        console.log("Database Connected successfully");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}