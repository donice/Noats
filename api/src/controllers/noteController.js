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

const getOneNote = (noteId) => {
  try {
    const note = DB.notes.find((note) => note.id === noteId);
    if (!note) {
      throw {
        status: 400,
        messages: `Can't find note with id ${noteId}`,
      };
    }
    return note;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewNote = (req, res) => {
  const { body } = req;

  console.log(req);
  console.log(body);

  if (!body.title || !body.body) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error: "One of the following key is missing: id, title, body",
      },
    });
    return;
  }

  const newNote = {
    title: body.title,
    body: body.body,
  };

  try {
    const createdNote = noteService.createNewNote(newNote);
    res.status(201).send({ status: "OK", data: createdNote });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneNote = (req, res) => {
  const updatedNote = noteService.updateOneNote();
  res.send("Update an existing workout");
};

const deleteOneNote = (req, res) => {
  noteService.deleteOneWorkout();
  res.send("Delete an existing workout");
};

module.exports = {
  getAllNotes,
  createNewNote,
  getOneNote,
  updateOneNote,
  deleteOneNote,
};
