import React from "react";

interface HeaderProps {
    selectedLanguage: string;
    onLanguageChange: (language:string) => void;
}

const Header:React.FC<HeaderProps> = ({ selectedLanguage, onLanguageChange}) => {
    return (
        <header className = "w-full bg-gray-500 p-4 flex justify-center items-center">
            <h1 className = "text-white text-2xl font-bold">Syntax Typer</h1>
            <select
                className = "ml-4 px-4 py-2 border rounded-md text-white-400 bg-gray-100"
                value = {selectedLanguage}
                onChange = {(e) => onLanguageChange(e.target.value)}
                >
                <option value="react">React</option>
                <option value="javascript">Javascript</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
            </select>
        </header>
    );
};

export default Header;