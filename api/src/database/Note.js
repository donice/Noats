const DB = require("./db.json");
// const { saveToDatabase } = require("./utils");

const getAllNotes = () => {
    try {
       return DB.notes; 
    } catch (error) {
        throw { status: 500, message: error }
    }
    
}

module.exports = {
    getAllNotes
}