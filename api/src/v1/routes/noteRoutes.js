const express = require("express");
const noteController = require("../../controllers/noteController");

const router = express.Router();

// 1ST route, 2ND function to be executed
router.get("/", noteController.getAllNotes);

router.get("/:noteId", noteController.getOneNote);

router.post("/", noteController.createNewNote);

router.patch("/:noteId", (req, res) => {
  res.send("Update an existing note");
});

router.delete("/:noteId", (req, res) => {
  res.send("Delete an existing note");
});


module.exports = router;