// routes/lessons.ts
import express from "express";
import { lessons } from "../data/lessons";

const router = express.Router();

// Get all lessons or filter by language
router.get("/", (req, res) => {
    const language = (req.query.language as string)?.toLowerCase();

    let filteredLessons = lessons;

    if (language) {
        filteredLessons = lessons.filter(
            (lesson) => lesson.language.toLowerCase() === language
        );
    }

    const lessonList = filteredLessons.map(({ lessonId, title }) => ({ lessonId, title }));

    res.json({ lessons: lessonList });
});

// Get specific lesson by language and lessonId
router.get("/:language/:lessonId", (req, res) => {
    const { language, lessonId } = req.params;

    console.log("🔍 Incoming request:", { language, lessonId });

    const match = lessons.find((l) => {
        const langMatch = l.language.toLowerCase() === language.toLowerCase();
        const idMatch = l.lessonId === parseInt(lessonId, 10);

        console.log(
            `Checking lesson: lang=${l.language}, id=${l.lessonId} → match? ${langMatch && idMatch}`
        );

        return langMatch && idMatch;
    });

    if (match) {
        console.log("✅ Match found:", match);
        res.json(match);
    } else {
        console.log("❌ No matching lesson found");
        res.status(404).json({ error: "Lesson not found" });
    }
});

export default router;
