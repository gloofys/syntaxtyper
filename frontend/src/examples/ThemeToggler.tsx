import React from "react";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

// Inner component that consumes context and renders the button
const ThemeInner: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme} className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">
                Toggle Theme
            </button>
        </div>
    );
};

// Wrapper that provides context and displays the inner component
const ThemeToggler: React.FC = () => (
    <ThemeProvider>
        <div className="p-4 bg-gray-100 rounded">
            <ThemeInner />
        </div>
    </ThemeProvider>
);

export default ThemeToggler;