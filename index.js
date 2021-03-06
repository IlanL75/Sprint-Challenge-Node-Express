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
    projectModel.get()
    .then((projects) => {
       res.status(200).json(projects);
    })
    .catch((error) => {
        res.status(500).json({message: 'The projects information could not be retrieved.'});
    })
});

server.get('/actions/:id', (req, res) => {
    const id = req.params.id;
    actionModel.get(id)
    .then((action) => {
        if(!action) {
            res.status(400).json({message: 'Action with provided id does not exist.'})
        } else {
            res.status(200).json(action);
        }
    })
    .catch((error) => {
        res.status(500).json({message: 'Action could not be retrieved.'});
    })
});

server.get('/projects/:id', (req, res) => {
    const id = req.params.id;
    projectModel.get(id)
    .then((project) => {
        if(!project) {
            res.status(400).json({message: 'Project with provided id does not exist.'})
        } else {
            res.status(200).json(project);
        } 
    })
    .catch((error) => {
        res.status(500).json({message: 'Project could not be retrieved.'});
    })
});

server.post('/actions', (req, res) => {
    const action = req.body;
    actionModel.insert(action)
    .then((action) => {
        res.status(200).json(action);
    })
    .catch((error) => {
        res.status(500).json({message: 'Action could not be saved.'});
    })
});

server.post('/projects', (req, res) => {
    const project = req.body;
    projectModel.insert(project)
    .then((project) => {
        res.status(200).json(project);
    })
    .catch((error) => {
        res.status(500).json({message: 'Project could not be saved.'});
    })
});

server.delete('/actions/:id', (req, res) => {
    const id = req.params.id;
    actionModel.remove(id)
    .then((action) => {
        if(!action) {
            res.status(400).json({message: 'Action with provided id does not exist.'})
        } else {
            res.status(200).json(action);
        }
    })
    .catch((error) => {
        res.status(500).json({message: 'Action could not be removed.'});
    })
});

server.delete('/projects/:id', (req, res) => {
    const id = req.params.id;
    projectModel.remove(id)
    .then((project) => {
        if(!project) {
            res.status(400).json({message: 'Project with provided id does not exist.'})
        } else {
            res.status(200).json(project);
        }
    })
    .catch((error) => {
        res.status(500).json({message: 'Project could not be removed.'});
    })
});

server.put('/actions/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    actionModel.update(id, changes)
    .then((id) => {
        if(id === 0) {
            res.status(400).json({message: 'Action with provided id does not exist.'});
        } else {
            res.status(200).json(id);
        }
    })
    .catch((error) => {
        res.status(500).json({message: 'Action could not be updated.'});
    });
});



server.put('/projects/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    projectModel.update(id, changes)
    .then((id) => {
        if(id === 0) {
            res.status(400).json({message: 'Project with provided id does not exist.'});
        } else {
            res.status(200).json(id);
        }
    })
    .catch((error) => {
        res.status(500).json({message: 'Project could not be updated.'});
    })
});



server.get('/projects/:id/actions', (req, res) => {
    const id = req.params.id;
    projectModel.getProjectActions(id)
    .then((id) => {
        if(!id) {
            res.status(400).json({message: 'Project with provided id does not exist.'})
        } else {
            res.status(200).json(id);
        }
    })
    .catch((error) => {
        res.status(500).json({message: 'Actions could not be retrieved'});
    })
});





const port = 8000;
server.listen(port, () => {
    console.log(`\n=== API running on port ${port} ===\n`);
});


