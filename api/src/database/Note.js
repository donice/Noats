const DB = require("./db.json");
const { saveToDatabase } = require("./utils");


const getAllNotes = () => {
  try {
    return DB.notes;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneNote = (noteId) => {
  try {
    const note = DB.notes.find((note) => note.id === noteId);
    if(!note) {
      throw {
        status: 400,
        message: `Can't find note with the id '${noteId}'`,
      };
    }
    return note;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
}

const createNewNote = (newNote) => {
  try {
    // isAdded = if the incoming note title matches the note in DB
    const isAdded =
      DB.notes.findIndex((note) => note.title === newNote.title) > -1;
    if (isAdded) {
      throw {
        status: 400,
        message: `Note with the title ${newNote.title} already exists`,
      };
    }
    DB.notes.push(newNote);
    saveToDatabase(DB);
    return newNote;
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error?.message || error,
    };
  }
};

module.exports = {
  getAllNotes,
  createNewNote,
  getOneNote,
};
