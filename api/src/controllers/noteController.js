const { request } = require("express");
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

const getOneNote = (req, res) => {
  const {
    params: { noteId },
  } = req;
  if (!noteId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':noteId' is required" },
    });
  }

  try {
    const note = noteService.getOneNote(noteId);
    res.send({ status: "OK", data: note });
  } catch (error) {
    console.error(error);
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
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
  const {
    body,
    params: { noteId },
  } = req;
  if (!noteId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':noteId' can not be empty" },
    });
  }
  try {
    const updatedNote = noteService.updateOneNote(noteId, body);
    res.send({ status: "OK", data: updatedNote });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneNote = (req, res) => {
  const {
    params: { noteId },
  } = req;

  if (!noteId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':noteId' can not be empty" },
    });
  }

  try {
    noteService.deleteOneNote(noteId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllNotes,
  createNewNote,
  getOneNote,
  updateOneNote,
  deleteOneNote,
};
