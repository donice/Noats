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

const updateOneNote = (noteId, changes) => {
  try {
    const isAlreadyAdded = 
      DB.notes.findIndex((note) => note.title == changes.title ) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Note with the name '${changes.name}' already exists`,
      };
    }

    const indexForUpdate = DB.notes.findIndex((note) => note.title === changes.title);
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }

    const updatedNote = {
      ...DB.notes[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    }

    DB.notes[indexForUpdate] = updatedNote;
    saveToDatabase(DB);
    return updatedNote;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneNote = (noteId) => {
  try {
    const indexForDeletion = DB.notes.findIndex((note) => note.id === noteId);
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find note with the id '${noteId}'`,
      };
    }
    DB.notes.splice(indexForDeletion, 1);
    saveToDatabase(DB)
  } catch(error) {
    throw { status: error?.status || 500, message: error?.message || error}
  }
};

module.exports = {
  getAllNotes,
  createNewNote,
  getOneNote,
  updateOneNote,
  deleteOneNote
};
