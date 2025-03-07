import React from "react";
import Timer from "./Timer.tsx";
import WPM from "./WPM.tsx";
import Accuracy from "./Accuracy.tsx";

interface ResultsProps {
    time: number;
    charCount: number;
    errors:number;
    snippet:string;
    onReset: () => void;
    isCompleted: boolean;
    isRunning: boolean;

}

const Results:React.FC<ResultsProps> = ({time, charCount, errors, snippet, isCompleted, onReset}) => {
//     EXECUTION RESULTS TO BE ADDED HERE
    const executeSnippet = (code: string) => {
        if(code.includes("return")) return "Output: 42";
        return "no output available";
    };

    return(
        <div className = "bg-white p-6 rounded-lg shadow-lg max-w-xl text-center border">
            <h2 className = "text-2xl font-bold mb-2">Typing Test Complete!</h2>
            <p className = "text-xl mb-4">Results:</p>

            <div className = "flex justify-center space-x-6 mt-4">
                <Timer isRunning={false} isCompleted={isCompleted} onTimeUpdate={() => {}} />
                <WPM time={time} charCount={charCount}/>
                <Accuracy correctChars={charCount - errors} totalChars={charCount}/>
            </div>

            <div className = "mt-6 bg-gray-100 p-4 rounded-md text-left font-mono">
                <h3 className="text-lg font-semibold">Code Execution result:</h3>
                <pre className = "text-sm text-gray-700">{executeSnippet(snippet)}</pre>
            </div>
            <button
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                onClick={onReset}
            >
                Try Again
            </button>
        </div>
    );
};

export default Results