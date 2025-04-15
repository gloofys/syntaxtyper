import { Lesson } from "../../types";

const lesson: Lesson = {
    lessonId: 2,
    language: "react",
    title: "React Hooks",
    steps: [
        {
            title: "Typing Challenge with Missing Line",
            description: "Fill in the missing return line.",
            type: "typingChallengeWithBlanks",
            codeSnippet: `import React from "react";

function Welcome() {
    return <h1>Hello, React!</h1>;
}

export default Welcome;`,
            blankLines: [2], // 0-based index, line 3 is the return statement
        },
        {
            title: "Summary",
            description: "You've practiced writing a React component with a missing line.",
        },
    ],
};

export default lesson;
