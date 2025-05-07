import React from "react";
import { useTheme } from "../context/ThemeContext.tsx";

const ThemeStatus: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemeStatus;
