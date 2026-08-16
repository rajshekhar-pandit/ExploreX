import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import dotenv from "dotenv";
import connectionDb from "./connection/db.connect.js";
import router from "./routes/userRouter.js";
import fileUpload from "express-fileupload";
import cors from "cors";
import contactUsRouter from "./routes/contactUsRoutes.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// Set up __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
const port = process.env.PORT || 3333;
const allowedOrigins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    process.env.FRONTEND_URL
].filter(Boolean);

// Middleware setup
app.use(cors({
    origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error(`CORS blocked request from origin: ${origin}`));
    },
    credentials: true
}));
app.use(express.json());
app.use(fileUpload());

// Set up static file serving
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Routes
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "ExploreX backend is running"
    });
});

app.use("/user", router);
app.use("/contactUs", contactUsRouter);
app.use("/", orderRouter);
app.use("/", productRouter);
app.use("/", cartRouter);

// Start the server
const startServer = async () => {
    try {
        await connectionDb();
        app.listen(port, "0.0.0.0", () => {
            console.log(`Server is running on ${port}`);
        });
    } catch (error) {
        console.error("Server startup failed:", error.message);
        process.exit(1);
    }
};

startServer();
