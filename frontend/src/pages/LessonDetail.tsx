import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TypingBox from "../components/Typingbox.tsx";
import {fetchLesson} from "../api/lessons.ts";
import { useLessonStore } from "../context/LessonContext";

interface StepData {
    title: string;
    description: string;
    type?: string;
}

interface LessonData {
    steps: StepData[];
}

const LessonDetail: React.FC = () => {
    const { language, lessonId } = useParams<{ language: string; lessonId: string }>();
    const navigate = useNavigate();
    const selectedLanguage = language || "react";
    const lessonNumber = Number(lessonId);

    const [lessonData, setLessonData] = useState<LessonData | null>(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { fetchLessons, totalLessons } = useLessonStore();

    useEffect(() => {
        async function fetchLessonData() {
            if (!lessonId) return;
            try {
                setLoading(true);
                const data = await fetchLesson(selectedLanguage, lessonId);
                if (!data) {
                    throw new Error("Failed to fetch lesson data");
                }
                setLessonData(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchLessonData();
    }, [selectedLanguage, lessonId])

    useEffect(() => {
        fetchLessons(selectedLanguage);
    }, [selectedLanguage]);

    const handleNext = () => {
        if (!lessonData) return;
        if (currentStep < lessonData.steps.length) {
            setCurrentStep((prev) => prev + 1);
        } else {
            navigate("/congratulations", {
                state: {
                    lessonNumber,
                    language: selectedLanguage,
                    totalLessons,
                },
            });
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const renderStepContent = () => {
        if (!lessonData) return null;
        const step = lessonData.steps[currentStep - 1];
        if (!step) {
            return <div>No content available for this step.</div>;
        }

        // Check if the step requires a special component like the TypingBox
        if (step.type === "typingChallenge") {
            return (
                <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-2">{step.description}</p>
                    <TypingBox selectedLanguage={selectedLanguage} />
                </div>
            );
        }

        return (
            <div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-2">{step.description}</p>
            </div>
        );
    };

    if (loading) {
        return <div>Loading lesson...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!lessonData) {
        return <div>No lesson data available.</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">
                {selectedLanguage.toUpperCase()} Lesson {lessonNumber}
            </h2>
            <p className="mt-2">
                Step {currentStep} of {lessonData.steps.length}
            </p>

            <div className="mt-4 p-4 border rounded-md">{renderStepContent()}</div>

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
                    {currentStep === lessonData.steps.length ? "Finish" : "Next"}
                </button>
            </div>
        </div>
    );
};

export default LessonDetail;
