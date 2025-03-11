// src/pages/LessonDetail.tsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";

interface LessonSteps {
    totalSteps: number;
    // more lesson data here (e.g., content per step)
}

//  mapping from lesson id to total steps (for demo)
const lessonData: Record<number, LessonSteps> = {
    1: { totalSteps: 5 },
    2: { totalSteps: 6 },
    3: { totalSteps: 4 },
};

const LessonDetail: React.FC = () => {
    const { language, lessonId } = useParams<{ language: string; lessonId: string }>();
    const selectedLanguage = language || "react";
    const lessonNumber = Number(lessonId);
    const lessonSteps = lessonData[lessonNumber] || { totalSteps: 1 };

    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        if (currentStep < lessonSteps.totalSteps) {
            setCurrentStep((prev) => prev + 1);
        } else {

            alert("Lesson complete!");
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">
                {selectedLanguage.toUpperCase()} Lesson {lessonNumber}
            </h2>
            <p className="mt-2">Step {currentStep} of {lessonSteps.totalSteps}</p>

            <div className="mt-4 p-4 border rounded-md">
                {/* Render  step content here. This could be dynamic based on currentStep */}
                <p>This is content for step {currentStep}.</p>
            </div>

            <div className="mt-4 flex space-x-4">
                <button
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                    {currentStep === lessonSteps.totalSteps ? "Finish" : "Next"}
                </button>
            </div>
        </div>
    );
};

export default LessonDetail;
