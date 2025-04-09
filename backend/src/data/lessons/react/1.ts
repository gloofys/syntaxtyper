import {Lesson} from "../../types";

const lesson: Lesson =
    {
        lessonId: 1,
        language: "react",
        title: "Introduction",
        steps: [
            {title: "Introduction", description: "Welcome to React Lesson 1."},
            {title: "Typing Challenge", description: "Practice your React syntax.", type: "typingChallenge" ,codeSnippet: `function Hello() {
  return <h1>Hello World</h1>;
}`,},
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
    }

    export default lesson