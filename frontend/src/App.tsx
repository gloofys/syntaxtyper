import {useState} from "react";
import Header from "./components/Header.tsx";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Challenges from "./pages/Challenges.tsx";
import LessonDetail from "./pages/LessonDetail.tsx";
import LessonsList from "./pages/LessonsList.tsx";

const App = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("react");
    return (
        <Router>
        <div className = "bg-white dark:bg-gray-400">
            <Header selectedLanguage={selectedLanguage} onLanguageChange={setSelectedLanguage} />
            <Routes>
                {/* Redirect root to default language */}
                <Route path="/" element={<Navigate to="/react" />} />
                {/* Language-specific routes */}
                <Route path="/:language" element={<Home />} />
                <Route path="/:language/lessons" element={<LessonsList />} />
                <Route path="/:language/lesson/:lessonId" element={<LessonDetail />} />
                <Route path="/:language/challenges" element={<Challenges />} />
            </Routes>
        </div>
        </Router>
    )
}
export default App