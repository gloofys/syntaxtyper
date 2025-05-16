
import React from "react";
import Counter from "./Counter";
import Timer from "./Timer";
import ThemeToggler from "./ThemeToggler.tsx";
import CounterExample from "./CounterExample.tsx";

export const examples: Record<string, React.FC> = {
    Counter,
    Timer,
    ThemeToggler,
    CounterExample
};
