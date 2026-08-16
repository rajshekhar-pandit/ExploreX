import mongoose from "mongoose"

const connectionDb = async () => {
    try {
        if (!process.env.MONGOURI) {
            throw new Error("MONGOURI environment variable is required")
        }

        await mongoose.connect(process.env.MONGOURI)
        console.log("Connected with database")
    } catch (error) {
        console.error("MongoDB connection failed:", error)
        throw error
    }
}

export default connectionDb
