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
    res.json(data)
})
app.get('/data/:id', (req, res) => {
    // convert id to a number from a string
    const id = Number(req.params.id);
    //find account.id if it equals id, also if you want to get a specific user
    const getUser = data.find(user => user.id === id);
    if (!getUser) {
        res.status(500).send('User not found.')
      } else {
        res.json(getUser);
      }
})

app.listen(port)
