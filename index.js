const express = require('express');
const fs = require("fs");

let app = express();

app.get('/', async function (req, res) {
    fs.readFile('./geo.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const jsonData = JSON.parse(data);
        res.send(jsonData);
    })
})


app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
});
