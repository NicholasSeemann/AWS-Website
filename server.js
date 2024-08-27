const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("Welcome to the home page!");
});

app.listen(PORT, () => {
    console.log("Hello friends!");
});