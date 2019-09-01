const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!\n'))

var server = app.listen(8081, () => {
    console.log("Listening on port " + server.address().port + "...");
});
