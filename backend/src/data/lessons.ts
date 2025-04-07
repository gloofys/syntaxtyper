export interface QuizQuestion {
    question: string;
    options: string[];
    correctIndex: number;
}

export interface Step {
    title: string;
    description: string;
    type?: string;
    questions?: QuizQuestion[];
}

export interface Lesson {
    lessonId: number;
    language: string;
    title: string;
    steps: Step[];
}


export const lessons: Lesson[] = [
    {
        lessonId: 1,
        language: "react",
        title: "Introduction",
        steps: [
            {title: "Introduction", description: "Welcome to React Lesson 1."},
            {title: "Typing Challenge", description: "Practice your React syntax.", type: "typingChallenge"},
            {title: "Explanation", description: "Review key concepts."},
            {
                title: "Quiz", description: "Answer questions to test your understanding.", type: "quiz", questions: [{
                question:
                    "What is JSX?",
                    options: ["A CSS framework", "A syntax extension for Javascript", "A React router"],
                    correctIndex: 1,
                },
                    {
                        question: "Which hook is used for side effects?",
                        options: ["useState", "useEffect", "useRef"],
                        correctIndex: 1,
                    },
                ],
            },
            {title: "Summary", description: "Great job! You've completed Lesson 1."},
        ],
    },
    {
        lessonId: 2,
        language: "react",
        title: "React Hooks",
        steps: [
            {title: "useState", description: "Learn how to use useState hook."},
            {title: "useEffect", description: "Learn how to use useEffect hook."},
        ],
    },
    {
        lessonId: 3,
        language: "react",
        title: "React Hooks",
        steps: [
            {title: "useState", description: "Learn how to use useState hook."},
            {title: "useEffect", description: "Learn how to use useEffect hook."},
        ],
    },
    {
        lessonId: 4,
        language: "react",
        title: "React Hooks",
        steps: [
            {title: "useState", description: "Learn how to use useState hook."},
            {title: "useEffect", description: "Learn how to use useEffect hook."},
        ],
    },

    {
        lessonId: 1,
        language: "java",
        title: "Introduction to Java",
        steps: [
            {title: "Introduction", description: "Welcome to Java Lesson 1."},
            {title: "Setup", description: "Learn how to set up Java."},
        ],
    },
    {
        lessonId: 2,
        language: "java",
        title: "Introduction to Java 2",
        steps: [
            {title: "Basics", description: "Welcome to Java Lesson 2."},
            {title: "Setup", description: "Setup of "},
        ],
    },
];
