const Project = require('../models/project');

module.exports = (app) => {
  // Create New Project
  app.post('/projects/new', (req, res) => {
    console.log(req.body)
    const project = new Project(req.body);
    console.log(project);

    project.save((err, project) =>
      res.send('cool'));
  });
};
