
const path = require('path');
const router = require('express').Router();

// GET requests for html
// /notes returns the notes.html file
router.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../Develop/public/notes.html')));
// all other queries will return the index.html
router.get('*', (req, res) => res.sendFile(path.join(__dirname, '../Develop/public/index.html')));

module.exports = router