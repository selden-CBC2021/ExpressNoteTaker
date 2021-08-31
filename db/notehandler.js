const util = require('util');
const fs = require('fs');
// const {readFile, writeFile} = require('fs/promises');
// This package will make the unique ids
const { v4: uuidv4 } = require('uuid');
// const nanoid  = require('nanoid')

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notehandler {
  read() {
    // const readData = await readFile('db/db.json, utf8');
    // return readData;
    return readFileAsync('db/db.json', 'utf8');
  }

  write(note) {
    // const writeData = await writeFile('db/db.json', JSON.stringify(note))
    // return writeData;
    return writeFileAsync('db/db.json', JSON.stringify(note));
  }
  async getNotes() {
    const notes = await this.read();
    let allNotes;
    // make the notes an array of objects returns an empty array if there are no
    try {
      allNotes = [].concat(JSON.parse(notes));
    } catch (err) {
      allNotes = [];
    }
    return allNotes;
  }
  async addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("You must add a title and text");
    }
    // Adding the unique id to each note from our package.
    const newNote = { title, text, id: uuidv4(10) };

    // Get all notes and add the new note to the end of the array then write the updated notes
    const notes = await this.getNotes();
    const updatedNotes = [...notes, newNote];
    await this.write(updatedNotes);
    return newNote;
  }
 
  async removeNote(id) {
    // Get all notes, filters the note out where uuid = note uuid
    // writes the new filtered notes
  const notes = await this.getNotes();
  const filteredNotes = notes.filter((note) => note.id !== id);
  return await this.write(filteredNotes);
    
  }
}

module.exports = new Notehandler();