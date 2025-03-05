import React, { useState, useEffect, useRef } from "react";
import { fetchSnippet } from "../api/snippets";

const TypingBox: React.FC = () => {
    const [snippet, setSnippet] = useState("");
    const [input, setInput] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [errors, setErrors] = useState<number[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        loadNewSnippet();
    }, []);

    const loadNewSnippet = async () => {
        const data = await fetchSnippet();
        if (data) {
            setSnippet(data.text);
            setInput("");
            setCurrentIndex(0);
            setErrors([]);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!snippet) return;
        const value = e.key;

        if (value.length === 1) {
            if (value === snippet[currentIndex]) {
                setInput((prev) => prev + value);
            } else {
                setErrors((prev) => [...prev, currentIndex]);
            }
            setCurrentIndex((prev) => prev + 1);
        }

        // Handle backspace
        if (e.key === "Backspace" && currentIndex > 0) {
            setInput((prev) => prev.slice(0, -1));
            setCurrentIndex((prev) => prev - 1);
            setErrors((prev) => prev.filter((idx) => idx !== currentIndex - 1));
        }
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-5">
            <h2 className="text-xl font-bold mb-4">Type the snippet below:</h2>

            <div
                className="bg-gray-100 p-4 rounded-md text-lg font-mono mb-4 w-full max-w-2xl leading-relaxed"
                onClick={() => inputRef.current?.focus()}
            >
                {snippet.split("").map((char, index) => {
                    let textColor = "text-gray-700";
                    if (index < currentIndex) {
                        textColor = errors.includes(index) ? "text-red-500" : "text-green-500";
                    }

                    return (
                        <span key={index} className={`${textColor} relative`}>
              {char}
                            {index === currentIndex && (
                                <span className="absolute left-0 w-[2px] h-6 bg-blue-500 animate-blink"></span>
                            )}
            </span>
                    );
                })}
            </div>

            {/* Invisible input for capturing keystrokes */}
            <input
                ref={inputRef}
                type="text"
                className="opacity-0 absolute"
                value={input}
                onKeyDown={handleKeyPress}
                readOnly
            />

            {currentIndex === snippet.length && (
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                    onClick={loadNewSnippet}
                >
                    Try Another
                </button>
            )}
        </div>
    );
};

export default TypingBox;
