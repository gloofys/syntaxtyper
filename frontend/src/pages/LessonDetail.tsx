import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TypingBox from "../components/Typingbox.tsx";

interface LessonSteps {
    totalSteps: number;
    // You can add more lesson-specific data here (like content for each step)
}

// Mapping from lesson id to the number of steps (for demonstration)
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

    // Track the current step (screen) within the lesson
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        if (currentStep < lessonSteps.totalSteps) {
            setCurrentStep((prev) => prev + 1);
        } else {
            alert("Lesson complete!");
            // Optionally navigate back to the lessons list or another page
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    // Render content based on the lesson and current step.
    // For Lesson 1, we'll include a TypingBox on step 2.
    const renderStepContent = () => {
        if (lessonNumber === 1) {
            switch (currentStep) {
                case 1:
                    return (
                        <div>
                            <h3 className="text-xl font-bold">Introduction</h3>
                            <p className="mt-2">
                                Welcome to Lesson 1. In this lesson, you'll learn the basics of React.
                            </p>
                        </div>
                    );
                case 2:
                    return (
                        <div>
                            <h3 className="text-xl font-bold">Typing Challenge</h3>
                            <p className="mt-2">Practice the React syntax by typing the snippet below:</p>
                            <TypingBox selectedLanguage={selectedLanguage} />
                        </div>
                    );
                case 3:
                    return (
                        <div>
                            <h3 className="text-xl font-bold">Explanation</h3>
                            <p className="mt-2">
                                Review the key concepts covered in the typing challenge.
                            </p>
                        </div>
                    );
                case 4:
                    return (
                        <div>
                            <h3 className="text-xl font-bold">Quiz</h3>
                            <p className="mt-2">
                                Answer some questions to check your understanding.
                            </p>
                            {/* Insert quiz component if available */}
                        </div>
                    );
                case 5:
                    return (
                        <div>
                            <h3 className="text-xl font-bold">Lesson Summary</h3>
                            <p className="mt-2">
                                Great job! You've completed Lesson 1.
                            </p>
                        </div>
                    );
                default:
                    return <div>No content available for this step.</div>;
            }
        } else {
            // For other lessons, you might have a simpler layout.
            return (
                <div>
                    <h3 className="text-xl font-bold">Lesson {lessonNumber} Content</h3>
                    <p className="mt-2">
                        This is content for lesson {lessonNumber}, step {currentStep}.
                    </p>
                </div>
            );
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">
                {selectedLanguage.toUpperCase()} Lesson {lessonNumber}
            </h2>
            <p className="mt-2">
                Step {currentStep} of {lessonSteps.totalSteps}
            </p>

            <div className="mt-4 p-4 border rounded-md">
                {renderStepContent()}
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
