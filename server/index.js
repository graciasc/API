const express = require('express');
const data =  require('./data.json');
require('dotenv').config();
const app = express();
const port = process.env.PORT ||8000;

app.get('/', (req, res) => {
    res.send('Node/Express API');
})

// can call this data when local host is running using fetch
app.get('/data', (req, res) => {
    res.send(data)
})

app.listen(port)
