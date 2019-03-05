/* eslint-disable no-new */
const Project = require('../models/project');

module.exports = (app) => {
  // Create New Project
  // app.post('/projects/new', (req, res) => {
  //   const project = new Project(req.body);

  //   project.save(project =>
  //     res.send(project))
  //     .catch(err =>
  //       new Error(err.message));
  // });

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
    Project.findById(req.params.id)
      .then((project) => {
        res.send({ project });
      })
      .catch((err) => {
        new Error(err.message);
      });
  });

  // Remove A Project
  app.delete('/projects/:id', (req, res) => {
    Project.findByIdAndRemove({ _id: req.params.id })
      .then(() => res.sendStatus(200))
      .catch((err) => {
        new Error(err.message);
      });
  });

  // Update A Project
  app.put('/projects/:id/edit', (req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.sendStatus(200))
      .catch((err) => {
        const error = new Error(err.message);
        console.log(error);
      });
  });
};
