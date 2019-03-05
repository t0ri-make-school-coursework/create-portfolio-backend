/* eslint-disable no-new */
const Project = require('../models/project');

module.exports = (app) => {
  // Create New Project
  app.post('/projects/new', (req, res) => {
    const project = new Project(req.body);

    project.save(newguy =>
      res.send(newguy))
      .catch(err =>
        new Error(err.message));
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

  // Get ONE Project
  app.get('/projects/:id', (req, res) => {
    // LOOK UP THE POST
    Project.findById(req.params.id)
      .then((project) => {
        res.send({ project });
      })
      .catch((err) => {
        new Error(err.message);
      });
  });
};
