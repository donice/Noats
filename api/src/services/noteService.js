// const { v4: uuid } = require('uuid');
const Notes = require("../database/Note");

const getAllNotes = () => {
  try {
    const allNotes = Notes.getAllNotes();
    return allNotes;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllNotes,
};
