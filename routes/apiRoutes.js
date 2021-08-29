const router = require('express').Router();
const path = require('path');
const storage = require('../db/notehandler');

// router.get('/notes', (req, res) => 
//     res.sendFile(path.json(__dirname, "../db/db.json")));

// router.post('/api/notes', (req, res) => 
//     res.sendFile(path.json(__dirname, "../db/db.json")));

// router.delete('/api/notes', (req, res) => 
//     res.sendFile(path.json(__dirname, "../db/db.json")));

// using storage as Notehandler class imported
router.get('/notes', (req, res) => {
    storage
      .getNotes()
      .then((notes) => {
        return res.json(notes);
      })
      .catch((err) => res.status(500).json(err));
  });
  
  // POST route
  router.post('/notes', (req, res) => {
    storage
      .addNote(req.body)
      .then((note) => res.json(note))
      .catch((err) => res.status(500).json(err));
  });
  
  // DELETE route
  router.delete('/notes/:id', (req, res) => {
    storage
      .removeNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch((err) => res.status(500).json(err));
  });
  

module.exports = router
