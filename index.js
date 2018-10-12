const express = require('express');
const actionModel = require('./data/helpers/actionModel');
const projectModel = require('./data/helpers/projectModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('*** SERVER IS FUNCTIONAL ***');
});


const port = 8000;
server.listen(port, () => {
    console.log(`\n=== API running on port ${port} ===\n`);
});