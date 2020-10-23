const express = require('express');
const app = express();

app.use(express.static('www'));

const server = app.listen(3000, function () {
    console.log(`listening on ${server.address().port}`);
});
