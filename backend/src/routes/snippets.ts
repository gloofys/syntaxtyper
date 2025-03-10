import express from "express";
import { snippets } from "../data/snippets";

const router = express.Router();


router.get("/", (req, res) => {
  let language = req.query.language as string | undefined;

  if (language) {
    language = language.trim().toLowerCase();
    const filteredSnippets = snippets.filter(
      snippet => snippet.language === language
    );
    if (filteredSnippets.length > 0) {
      res.json(
        filteredSnippets[Math.floor(Math.random() * filteredSnippets.length)]
      );
      return;
    }
    res.status(404).json({ message: "No snippets found for this language" });
    return;
  }

  const randomSnippet = snippets[Math.floor(Math.random() * snippets.length)];
  res.json(randomSnippet);
});

export default router;
