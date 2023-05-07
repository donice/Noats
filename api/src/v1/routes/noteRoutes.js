const express = require("express");
const noteController = require("../../controllers/noteController");

const router = express.Router();

// 1ST route, 2ND function to be executed
router.get("/", noteController.getAllNotes);

router.get("/:noteId", noteController.getOneNote);

router.post("/", noteController.createNewNote);

router.patch("/:noteId", noteController.updateOneNote);

router.delete("/:noteId", noteController.deleteOneNote);


module.exports = router;