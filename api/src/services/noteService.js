const { v4: uuid } = require('uuid');
const Notes = require("../database/Note");

const getAllNotes = () => {
  try {
    const allNotes = Notes.getAllNotes();
    return allNotes;
  } catch (error) {
    throw error;
  }
};

const getOneNote = (noteId) => {
  try {
    const note = Notes.getOneNote(noteId);
    return note;
  } catch (error) {
    throw error;
  }
}

// receives from the controller file
const createNewNote = (newNote) => {
  const noteToAdd = {
    ...newNote,
    id: uuid(),
    createdAt: new Date().toLocaleDateString("en-US", {timeZone: "UTC"}),
    updatedAt: new Date().toLocaleDateString("en-US", {timeZone: "UTC"}),
  };

  try {
    const createdNote = Notes.createNewNote(noteToAdd);
    return createdNote;
  } catch (error) {
    throw error;
  }
};

const updateOneNote = (noteId, changes) => {
  try {
    const updatedNote = Notes.updateOneNotes(noteId, changes);
    return updatedNote;
  } catch (error) {
     throw error;
  }
};

const deleteOneNote = (id) => {
  try {
    Notes.deleteOneNote(id);
  } catch (error) {
    throw error;
  };
};

module.exports = {
  getAllNotes,
  createNewNote,
  getOneNote,
  updateOneNote,
  deleteOneNote
};
