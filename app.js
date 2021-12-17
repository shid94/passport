const express = require('express');

const app = express();
const expresslayout = require('express-ejs-layouts');

//View
app.use(expresslayout);
app.set('view engine','ejs');

//Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/user'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`));