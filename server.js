import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./database/db.js";

dotenv.config();

const app = express();
app.use(cors({
    origin: "http://localhost:5173"
}
));
app.use(express.json());

connectDB();

const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});