import express from 'express';


const router = express.Router();

const snippets = [
    {
        id : 1,
        language: "javascript",
        text: `function add(a, b) {\n  return a + b;\n}`
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
    }
];



router.get("/", (req, res) => {
    const randomSnippet = snippets[Math.floor(Math.random() * snippets.length)];
    res.json(randomSnippet);
});
export default router;
