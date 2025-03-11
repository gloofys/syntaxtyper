import React from "react";
import { useParams } from "react-router-dom";
import TypingBox from "../components/Typingbox.tsx";

const Lessons: React.FC = () => {
    // Get the language from the URL
    const { language } = useParams<{ language: string }>();
    // Fallback to "react" if language is undefined
    const selectedLanguage = language || "react";

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">Lessons</h2>
            <p className="mt-2">
                Welcome to the {selectedLanguage} lessons page.
            </p>
            <TypingBox selectedLanguage={selectedLanguage} />
        </div>
    );
};

export default Lessons;
