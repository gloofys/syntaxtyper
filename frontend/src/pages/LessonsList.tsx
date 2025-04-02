import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

interface Lesson {
    lessonId: number;
    title: string;
}

const LessonsList: React.FC = () => {
    const { language } = useParams<{ language: string }>();
    const selectedLanguage = language?.toLowerCase() || "react";
    const [lessons, setLessons] = useState<Lesson[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchLessons() {
            try {
                setLoading(true);
                const response = await axios.get(`/api/lessons?language=${selectedLanguage}`);
                // Assuming the API returns { lessons: Lesson[] }
                setLessons(response.data.lessons || []);
            } catch (err: any) {
                setError("Failed to fetch lessons");
            } finally {
                setLoading(false);
            }
        }
        fetchLessons();
    }, [selectedLanguage]);

    if (loading) return <div>Loading lessons...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">
                {selectedLanguage.toUpperCase()} Lessons
            </h2>
            <ul className="mt-4 space-y-2">
                {lessons.map((lesson) => (
                    <li key={lesson.lessonId}>
                        <Link
                            to={`/${selectedLanguage}/lesson/${lesson.lessonId}`}
                            className="text-blue-500 hover:underline"
                        >
                            Lesson {lesson.lessonId}: {lesson.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LessonsList;
