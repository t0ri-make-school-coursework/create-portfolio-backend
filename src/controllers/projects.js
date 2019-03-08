/* eslint-disable no-new */
const Project = require('../models/project');

module.exports = (app) => {
  // Create A Project
  app.post('/projects/new', (req, res) => {
    if (req.user) {
      const project = new Project(req.body);
      console.log(project)
      project.save().then(() =>{
        res.sendStatus(200)
      })
    } else {
      return res.status(401); // UNAUTHORIZED
    }
  });

  // Read A Project
  app.get('/projects/:id', (req, res) => {
    Project.findById(req.params.id)
      .then((project) => {
        res.send({ project });
      })
      .catch((err) => {
        new Error(err.message);
      });
  });

  // Update A Project
  app.put('/projects/:id/edit', (req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.sendStatus(200))
      .catch((error) => {
        new Error(error.message);
      });
  });

  // Delete A Project
  app.delete('/projects/:id', (req, res) => {
    Project.findByIdAndRemove({ _id: req.params.id })
      .then(() => res.sendStatus(200))
      .catch((err) => {
        new Error(err.message);
      });
  });

  // Get All Projects
  app.get('/projects', (req, res) => {
    Project.find({})
      .then((projects) => {
        res.send({ projects });
      })
    .catch((err) => {
      new Error(err.message);
    });
  });
};
