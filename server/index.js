const express = require('express');
const app = express();
const port = process.env.PORT ||8000;

app.use('/', (req, res) => {
    res.send('Express');
})

app.listen(port)
