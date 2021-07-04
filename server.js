// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.get('/', (req, res) => {
//     res.send('Welcome to the Star Wars Page!');
//   });
  
// app.get('/about', (req, res) => {
//     res.send("This is the about page");
//   })

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

app.get('/:add', (req, res) => {
    const chosen = req.params.add;
  
    console.log(chosen);
  
    res.end();
  });

  

  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));