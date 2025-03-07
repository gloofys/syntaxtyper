import React from "react";

interface WPMProps {
    time:number;
    charCount:number;
}

const WPM: React.FC<WPMProps> = ({ time, charCount}) => {
    const wordsTyped = charCount / 5;
    const minutes = time/60;
    const wpm = minutes > 0 ? Math.round(wordsTyped / minutes) : 0;

    return <div className="text-xl font-bold">WPM: {wpm}</div>;
}

export default WPM;