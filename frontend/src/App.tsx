import {useState} from "react";
import TypingBox from "./components/Typingbox.tsx";
import Header from "./components/Header.tsx";

const App = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("react");
    return (
        <div className = "bg-white dark:bg-gray-400">
            <Header selectedLanguage={selectedLanguage} onLanguageChange={setSelectedLanguage} />
            <TypingBox selectedLanguage={selectedLanguage}/>
        </div>
    )
}
export default App