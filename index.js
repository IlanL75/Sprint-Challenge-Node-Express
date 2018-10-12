const express = require('express');
const actionModel = require('./data/helpers/actionModel');
const projectModel = require('./data/helpers/projectModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('*** SERVER IS FUNCTIONAL ***');
});

server.get('/actions', (req, res) => {
    actionModel.get()
    .then((actions) => {
       res.status(200).json(actions);
    })
    .catch((error) => {
        res.status(500).json({message: 'The actions information could not be retrieved.'});
    })
});

server.get('/projects', (req, res) => {
    actionModel.get()
    .then((projects) => {
       res.status(200).json(projects);
    })
    .catch((error) => {
        res.status(500).json({message: 'The projects information could not be retrieved.'});
    })
});




const port = 8000;
server.listen(port, () => {
    console.log(`\n=== API running on port ${port} ===\n`);
});


