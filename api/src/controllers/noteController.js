const noteService = require("../services/noteService")

const getAllNotes = (req, res) => {
    const allNotes = noteService.getAllNotes();
    res.send({ status: 200, body: allNotes})
}

module.exports = {
    getAllNotes
}