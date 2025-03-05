import express from 'express';


const router = express.Router();

const snippets = [
    {id : 1, language: "javascript", text: "const sum = (a,b) => a+b;"},
    {id : 2, language: "python", text: "def sum(a, b): return a+b" },
    {id : 3, language: "java", text: "public int sum(int a, int b) {return a+b; }"}
];

router.get("/", (req, res) => {
    const randomSnippet = snippets[Math.floor(Math.random() * snippets.length)];
    res.json(randomSnippet);
});
export default router;
