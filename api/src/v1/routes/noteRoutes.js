const express = require("express");
const noteController = require("../../controllers/noteController");

const router = express.Router();

// 1ST route, 2ND function to be executed
router.get("/", noteController.getAllNotes);

router.get("/:note", (req, res) => {
  res.send("Get an existing note");
});

router.post("/", (req, res) => {
  res.send("Create a new note");
});

router.patch("/:note", (req, res) => {
  res.send("Update an existing note");
});

router.delete("/:note", (req, res) => {
  res.send("Delete an existing note");
});


module.exports = router;