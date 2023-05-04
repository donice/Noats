// const { v4: uuid } = require('uuid');
const Notes = require("../database/Note")

const getAllNotes = () => {
    const allNotes = Notes.getAllNotes();
    return allNotes;
}

module.exports = {
    getAllNotes
}