import React, { useState, useEffect } from "react";

interface TimerProps {
    isRunning: boolean;
    onTimeUpdate: (time: number) => void;
    isCompleted: boolean;
}

const Timer: React.FC<TimerProps> = ({ isRunning, onTimeUpdate, isCompleted }) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval: number | undefined;

        if (isRunning) {
            interval = window.setInterval(() => {
                setTime((prevTime) => {
                    const newTime = prevTime + 1;
                    onTimeUpdate(newTime);
                    return newTime;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            if (interval !== undefined) clearInterval(interval);
        };
    }, [isRunning]);

    // ✅ Reset time when test is completed or restarted
    useEffect(() => {
        if (!isRunning || isCompleted) {
            setTime(0);
        }
    }, [isRunning, isCompleted]);

    return <div className="text-xl font-bold">Time: {time}s</div>;
};

export default Timer;
