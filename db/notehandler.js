const util = require('util');
const fs = require('fs');

// This package will make the unique ids
const { v4: uuidv4 } = require('uuid');
// const nanoid  = require('nanoid')

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notehandler {
  read() {
    return readFileAsync('db/db.json', 'utf8');
  }

  write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note));
  }
}

module.exports = new Notehandler();