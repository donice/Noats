const express = require("express");
const noteController = require("../../controllers/noteController");

const router = express.Router();

// 1ST route, 2ND function to be executed
router.get("/", noteController.getAllNotes).post("/", noteController.createNewNote);

router.get("/:noteId", noteController.getOneNote).delete("/:noteId", noteController.deleteOneNote).patch("/:noteId", noteController.updateOneNote);

module.exports = router;