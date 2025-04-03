import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CongratulationsPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const lessonNumber = location.state?.lessonNumber;

    return (
        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold mb-4">🎉 Congratulations!</h1>
            <p className="text-lg mb-2">
                You've completed Lesson {lessonNumber ?? "?"}.
            </p>
            <button
                onClick={() => navigate("/")}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
            >
                Back to Home
            </button>
        </div>
    );
};

export default CongratulationsPage;
