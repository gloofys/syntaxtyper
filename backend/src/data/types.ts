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
    codeSnippet?: string;
}

export interface Lesson {
    lessonId: number;
    language: string;
    title: string;
    steps: Step[];
}
