// Dependencies

const express = require('express');
const path = require('path');
const fs = require('fs');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "Develop/public")));


// app.get('/', (req, res) => {
//     res.send('Welcome to the Star Wars Page!');
//   });
  
// app.get('/about', (req, res) => {
//     res.send("This is the about page");
//   })

// GET requests for html
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'Develop/public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'Develop/public/notes.html')));

app.get('/api/notes', (req, res) => res.sendFile(path.json(__dirname, "Develop/db/db.json")));

// Start the server on the port
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));