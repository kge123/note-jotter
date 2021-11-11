const fs = require("fs");
const util = require("util");

const uuid = require("uuid/v1");

const readAsync = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);

class Notes {
  read() {
    return readAsync("db/db.json", "utf-8");
  }

  write(data) {
    return writeAsync("db/db.json", JSON.stringify(data));
  }

  readNotes() {
    return this.read().then((notes) => {
      let allNotes;

      try {
        allNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        allNotes = [];
      }

      return allNotes;
    });
  }

  writeNotes(notes) {
    const { title, text } = notes;
    //we need to create a new note with a unique ID
    const newNotes = { title, text, id: uuid() };

    //get all notes, add the new note to the note array, and write all the notes
    return this.readNotes()
      .then((notes) => [...notes, newNotes])
      .then((updated) => this.write(updated));
  }

  ///create a function that takes in an id. remove the note with the id that was passed in and then write the remaining notes. look at the filter functions in js

//   deleteNotes(id) {

//   }
}

module.exports = new Notes();
