// Test script to verify MongoDB connection
import dotenv from "dotenv";
import connectionDb from "./connection/db.connect.js";
import mongoose from "mongoose";

dotenv.config();

console.log("\n🔍 Testing MongoDB Connection...\n");
console.log("=" .repeat(50));

// Check if MONGOURI exists
if (!process.env.MONGOURI) {
    console.error("❌ ERROR: MONGOURI is not defined in .env file");
    console.log("\n📝 To fix this:");
    console.log("1. Create or open the .env file in the backend folder");
    console.log("2. Add this line: MONGOURI=your_connection_string");
    console.log("\n📋 Connection string formats:");
    console.log("   Local: mongodb://localhost:27017/your_database_name");
    console.log("   Atlas: mongodb+srv://username:password@cluster.mongodb.net/database_name");
    process.exit(1);
}

console.log("✅ MONGOURI found in .env file");
console.log(`📍 Connection string: ${process.env.MONGOURI.replace(/\/\/([^:]+):([^@]+)@/, '//$1:****@')}\n`);

// Test the connection
connectionDb()
    .then(() => {
        console.log("\n" + "=".repeat(50));
        console.log("✅ SUCCESS: Database connection is working correctly!");
        console.log("=" .repeat(50));
        process.exit(0);
    })
    .catch((error) => {
        console.log("\n" + "=".repeat(50));
        console.error("❌ FAILED: Database connection failed");
        console.log("=" .repeat(50));
        process.exit(1);
    });






