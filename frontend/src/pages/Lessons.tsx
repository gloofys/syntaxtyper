import React from "react";
import { Link, useParams } from "react-router-dom";

interface Lesson {
    id: number;
    title: string;
}

// Define lesson lists for different languages
const lessonsByLanguage: Record<string, Lesson[]> = {
    react: [
        { id: 1, title: "Introduction to React" },
        { id: 2, title: "useState() Hook" },
        { id: 3, title: "useEffect() Hook" },

    ],
    javascript: [
        { id: 1, title: "Introduction to JavaScript" },
        { id: 2, title: "Functions and Scope" },
        { id: 3, title: "Promises and Async/Await" },

    ],
    python: [
        { id: 1, title: "Introduction to Python" },
        { id: 2, title: "Data Structures in Python" },
        { id: 3, title: "File I/O and Exceptions" },

    ],
    java: [
        { id: 1, title: "Introduction to Java" },
        { id: 2, title: "OOP Concepts in Java" },
        { id: 3, title: "Java Streams" },

    ],
};

const LessonsList: React.FC = () => {

    const { language } = useParams<{ language: string }>();
    const selectedLanguage = language?.toLowerCase() || "react";


    const currentLessons = lessonsByLanguage[selectedLanguage] || lessonsByLanguage["react"];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">
                {selectedLanguage.toUpperCase()} Lessons
            </h2>
            <ul className="mt-4 space-y-2">
                {currentLessons.map((lesson) => (
                    <li key={lesson.id}>
                        <Link
                            to={`/${selectedLanguage}/lesson/${lesson.id}`}
                            className="text-blue-500 hover:underline"
                        >
                            Lesson {lesson.id}: {lesson.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LessonsList;
