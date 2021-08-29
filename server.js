// Dependencies

const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Sets up your express server with PORT from .env file or 3001 

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the express app to handle data parsing and middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'Develop/public')));

// importing api/html routes 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on PORT
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


