/* eslint-disable func-names */
// app.post('/projects/new', (req, res) => {
//   console.log(req.body)
//   const project = new Project(req.body);
//   console.log(project);

//   project.save((err, project) =>
//     res.send('cool'));
// });

const chai = require('chai');
// const chaiHttp = require('chai-http');
const Project = require('../../models/project');
const server = require('../../server');

// const should = chai.should();
const expect = chai.expect;

// const agent = chai.request.agent(server);

chai.config.includeStack = true;
// chai.use(chaiHttp);

describe('## Projects Controller', () => {
  // Post that we'll use for testing purposes
  const newProject = {
    title: 'Project Title',
    madeFor: 'Class Name',
    shortDesc: 'This is my short description.',
    longDesc: 'This is my long description.',
    repo: 'https://www.google.com',
    live: 'https://www.google.com',
    img: 'https://www.google.com',
  };

  before((done) => {
    chai
      .set('content-type', 'application/x-www-form-urlencoded')
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should create with valid attributes at POST /projects/new', (done) => {
    // Checks how many posts there are now
    Project.estimatedDocumentCount()
      .then((initialDocCount) => {
        chai
          .request(server)
          .post('/projects/new')
          // This line fakes a form post,
          // since we're not actually filling out a form
          .set('content-type', 'application/x-www-form-urlencoded')
          // Make a request to create another
          .send(newProject)
          .then((res) => {
            Project.estimatedDocumentCount()
              .then((newDocCount) => {
                // Check that the database has one more post in it
                expect(res).to.have.status(200);
                // Check that the database has one more post in it
                expect(newDocCount).to.be.equal(initialDocCount + 1);
                done();
              })
              .catch((err) => {
                done(err);
              });
          })
          .catch((err) => {
            done(err);
          });
      })
      .catch((err) => {
        done(err);
      });
  });

  after((done) => {
    Project.findOneAndDelete(newProject)
      .then(() => {
        chai.close();
      })
      .catch((err) => {
        done(err);
      });
  });
});
