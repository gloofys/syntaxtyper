import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import snippetRoutes from "./routes/snippets";
import lessonRoutes from "./routes/lessons";


dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
app.use("/snippets", snippetRoutes);
app.use("/api/lessons", lessonRoutes);


app.get("/", (req, res) => {
    res.send("Coding Syntax Typing API is running!");
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
