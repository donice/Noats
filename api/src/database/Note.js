const DB = require("./db.json");
// const { saveToDatabase } = require("./utils");

const getAllNotes = () => {
    return DB.notes;
}

module.exports = {
    getAllNotes
}