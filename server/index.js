const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT ||8000;

app.use('/', (req, res) => {
    res.send('Express');
})

app.listen(port)
