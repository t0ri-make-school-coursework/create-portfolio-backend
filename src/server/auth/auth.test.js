const chai = require('chai');
const authRoute = require('./auth.route');
const server = require('../../server');

// const should = chai.should();
const expect = chai.expect;

const agent = chai.request.agent(server);

chai.config.includeStack = true;

describe('## Auth APIs', () => {
  it('doesn\'t log in unregistered users', () => {
    agent.post('/login', { email: 'cool@neat.com', password: 'wow' })
    .end((err, res) => {
      res.status.should.be.equal(401);
    });
  });

  it('registers new users', () => {
    agent.post('/signup', { email: 'cool@neat.com', password: 'wow' })
    .end((err, res) => {
      res.status.should.be.equal(200);
    });
  });

  it('logs registered users in', () => {
    const user = 'username';
    const password = 'password';
    const res = authRoute.getAuth(user, password);

    expect(res).to.be.an('object');
  });

  it('');
});
