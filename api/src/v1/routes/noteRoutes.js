const express = require("express");

const router = express.Router();

// first parameter is the route, second parameter is function to be executed
router.get("/", (req, res) => {
  res.send("Get all notes");
});

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