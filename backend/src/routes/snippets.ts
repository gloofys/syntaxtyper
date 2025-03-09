import express from "express";

const router = express.Router();

const snippets = [
    {
        id: 1,
        language: "javascript",
        text: `function add(a, b) {\n    return a + b;\n}`
    },
    {
        id: 2,
        language: "python",
        text: `def greet(name):\n    return f"Hello, {name}!"`
    },
    {
        id: 3,
        language: "java",
        text: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n    }\n}`
    },
    {
        id: 4,
        language: "react",
        text: `const [state, setState] = useState(initialState);`
    }
];

router.get("/", (req, res) => {
    let language = req.query.language as string | undefined;

    if (language) {
        language = language.trim().toLowerCase();

        const filteredSnippets = snippets.filter(
            snippet => snippet.language === language
        );

        if (filteredSnippets.length > 0) {
            res.json(filteredSnippets[Math.floor(Math.random() * filteredSnippets.length)]);
            return;
        }
        res.status(404).json({ message: "No snippets found for this language" });
        return;
    }

    const randomSnippet = snippets[Math.floor(Math.random() * snippets.length)];
    res.json(randomSnippet);
});

export default router;
