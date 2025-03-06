import React, {useState, useEffect, useRef} from "react";
import {fetchSnippet} from "../api/snippets";

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

        const expectedChar = snippet[currentIndex];


        if (e.key === "Enter") {
            e.preventDefault();

            if (expectedChar === "\n") {
                setCurrentIndex((prev) => prev + 1);
            } else {
                setErrors((prev) => [...prev, currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }
            return;
        }

        // Handle Tab key (insert 4 spaces)
        if (e.key === "Tab") {
            e.preventDefault(); // Prevent browser default behavior

            const spaceCount = 4;
            const expectedSpaces = snippet.slice(currentIndex, currentIndex + spaceCount);

            if (expectedSpaces === "    ") {
                setCurrentIndex((prev) => prev + spaceCount);
            } else {
                setErrors((prev) => [...prev, ...Array.from(Array(spaceCount).keys()).map(i => currentIndex + i)]);
                setCurrentIndex((prev) => prev + spaceCount);
            }
            return;
        }

        if (e.key.length === 1) {
            if (e.key === expectedChar) {
                setInput((prev) => prev + e.key);
            } else {
                setErrors((prev) => [...prev, currentIndex]);
            }
            setCurrentIndex((prev) => prev + 1);
            return;
        }

        if (e.key === "Backspace" && currentIndex > 0) {
            e.preventDefault();
            const prevChar = snippet[currentIndex - 1];

            if (prevChar === "\n") {
                setCurrentIndex((prev) => prev - 1);
            } else {
                setInput((prev) => prev.slice(0, -1));
                setCurrentIndex((prev) => prev - 1);
                setErrors((prev) => prev.filter((idx) => idx !== currentIndex - 1));
            }
        }
    };


    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-5">
            <h2 className="text-xl font-bold mb-4">Type the snippet below:</h2>

            <pre
                className="bg-gray-100 p-4 rounded-md text-lg font-mono mb-4 w-full max-w-2xl leading-relaxed whitespace-pre-wrap"
                onClick={() => inputRef.current?.focus()}
            >
  {snippet.split("").map((char, index) => {
      let textColor = "text-gray-700";
      if (index < currentIndex) {
          textColor = errors.includes(index) ? "text-red-500 bg-red-200" : "text-green-500 bg-green-100";
      } else if (index === currentIndex) {
          textColor = "text-blue-500";
      }

      return (
          <span key={index} className={`letter relative ${textColor}`}>
        {char === " " ? "\u00A0" : char === "\n" ? (
            <span className={`relative ${textColor}`}>
            ⏎
                {index === currentIndex && (
                    <span
                        className="cursor-line absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 animate-blink"></span>
                )}
                <br/>
          </span>
        ) : (
            char
        )}

              {index === currentIndex && char !== "\n" && (
                  <span
                      className="cursor-line absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 animate-blink"></span>
              )}
      </span>
      );
  })}
</pre>


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
}

export default TypingBox;
