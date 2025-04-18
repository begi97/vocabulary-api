import express from "express";
import { deleteWordController, editWordController, getAllWords, saveWordController } from "../controllers/vocabulary.controller.js";

const vocabularyRoutes = express.Router();

// get all words
vocabularyRoutes.get("/get-all-words", getAllWords)
// save all words
vocabularyRoutes.post("/save-word", saveWordController)
// delete single word
vocabularyRoutes.delete("/delete-word/:id", deleteWordController)
// edit word
vocabularyRoutes.put("/edit-word/:id", editWordController)

export default vocabularyRoutes;