import { Lesson } from "../../types";

const lesson4: Lesson = {
    lessonId: 4,
    language: "react",
    title: "useContext() Hook",
    steps: [
        {
            title: "Introduction",
            description: `
The \`useContext\` hook lets you consume values from a React Context without prop-drilling. 
Context is ideal for global settings like themes, authentication status, or localization.
      `.trim(),
        },
        {
            title: "Typing Challenge",
            type: "typingChallenge",
            description: "Create a ThemeContext and provider, then build a nested component that reads and toggles the theme using `useContext`.",
            codeSnippet: `
import React, { createContext, useState, useContext } from "react";

interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const ThemeStatus: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};
      `.trim(),
            exampleKey: "ThemeToggler",
        },
        {
            title: "Live Preview & Explanation",
            type: "explanation",
            exampleKey: "ThemeToggler",
            description: `
**What you built**

1. **Context Definition:** Created a \`ThemeContext\` via \`createContext<ThemeContextType>()\`.
2. **Provider:** Wrapped your app in \`ThemeProvider\` supplying \`{ theme, toggleTheme }\`.
3. **Consumption:** Used \`useContext(ThemeContext)\` in \`ThemeStatus\` to read and update the theme.

**Why it works**

- \`createContext\` sets up a context object with a default value.
- \`ThemeContext.Provider\` provides the real value to all descendants.
- \`useContext\` reads the current context value and triggers re-render on changes.
      `.trim(),
            codeSnippet: `
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const ThemeStatus: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};
      `.trim(),
        },
        {
            title: "Quiz",
            type: "quiz",
            description: "Test your understanding of `useContext`:",
            questions: [
                {
                    question: "What does `createContext(defaultValue)` do?",
                    options: [
                        "Creates a provider and consumer component",
                        "Defines a context object with the given default value",
                        "Automatically injects the value into props",
                    ],
                    correctIndex: 1,
                },
                {
                    question: "How do you read context in a function component?",
                    options: [
                        "`const ctx = useContext(MyContext)`",
                        "`const ctx = MyContext.read()`",
                        "`renderContext(MyContext)`",
                    ],
                    correctIndex: 0,
                },
                {
                    question: "What happens if you call `useContext` outside of a matching provider?",
                    options: [
                        "You get `undefined` or the default value",
                        "It throws a runtime error",
                        "React will ignore the call",
                    ],
                    correctIndex: 0,
                },
            ],
        },
        {
            title: "Fill in the blanks",
            type: "typingChallengeWithBlanks",
            description: "Fill in the key Context functions yourself!",
            codeLines: [
                `import React, { createContext, useState, useContext } from "react";`,
                ``,
                `interface ThemeContextType {`,
                `    theme: "light" | "dark";`,
                `    toggleTheme: () => void;`,
                `}`,
                ``,
                `export const ThemeContext = createContext<ThemeContextType>({`,
                `    theme: "light",`,
                `    toggleTheme: () => {},`,
                `});`,
                ``,
                `export const ThemeProvider: React.FC = ({ children }) => {`,
                `    const [theme, setTheme] = useState<"light" | "dark">("light");`,
                `    const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));`,
                ``,
                `    return (`,
                `        <ThemeContext.Provider value={{ theme, toggleTheme }}>`,
                `            {children}`,
                `        </ThemeContext.Provider>`,
                `    );`,
                `};`,
                ``,
                `export const ThemeStatus: React.FC = () => {`,
                `    const { theme, toggleTheme } = useContext(ThemeContext);`,
                ``,
                `    return (`,
                `        <div>`,
                `            <p>Current theme: {theme}</p>`,
                `            <button onClick={toggleTheme}>Toggle Theme</button>`,
                `        </div>`,
                `    );`,
                `};`,
            ],
            blankLines: [2, 9, 20],
        },
        {
            title: "Summary",
            description: "Great job! You’ve:",
            bullets: [
                "Created and provided a ThemeContext for global state.",
                "Consumed context with the useContext hook in a nested component.",
                "Learned how context avoids prop-drilling for shared data.",
            ],
            outro: "Next up: we’ll explore advanced state management with the useReducer hook!",
        },
    ],
};

export default lesson4;
