// Dependencies

const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// Sets up the Express server and sets the initial port

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing and middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'Develop/public')));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// require('./routes/apiRoutes')(app);
// require('./routes/htmlRoutes')(app);





// Start the server on the port
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));