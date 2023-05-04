const noteService = require("../services/noteService");

const getAllNotes = (req, res) => {
  try {
    const allNotes = noteService.getAllNotes();
    res.send({ status: "OK", body: allNotes });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllNotes,
};
