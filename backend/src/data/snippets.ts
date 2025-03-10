export interface Snippet {
    id: number;
    language: string;
    text: string;
    // Optionally include metrics:
    lines: number;
    characters: number;
}

export const snippets: Snippet[] = [
    {
        id: 1,
        language: "javascript",
        text: `function add(a, b) {\n    return a + b;\n}`,
        lines: 3,
        characters: 36,
    },
    {
        id: 2,
        language: "python",
        text: `def greet(name):\n    return f"Hello, {name}!"`,
        lines: 2,
        characters: 41,
    },
    {
        id: 3,
        language: "java",
        text: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n    }\n}`,
        lines: 5,
        characters: 87,
    },
    {
        id: 4,
        language: "react",
        text: `const [state, setState] = useState(initialState);`,
        lines: 1,
        characters: 48,
    },
    {
        id: 5,
        language: "react",
        text: `const [fred, setFred] = useState('');`,
        lines: 1,
        characters: 43,
    },
    {
        id: 6,
        language: "react",
        text: `const [fred, setFred] = useState('');`,
        lines: 1,
        characters: 43,
    },
];