import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./config/db.js";
import vocabularyRoutes from "./routes/vocabulary.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7777;

app.use(express.json()); // allows us to accept JSON data in the req.body
app.use("/api/vocabulary", vocabularyRoutes);


app.listen(PORT, () => {
    connectDatabase();
    console.log("Server started at http://localhost:" + PORT);
});
