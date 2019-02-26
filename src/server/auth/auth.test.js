const chai = require('chai');

const expect = chai.expect;

const authRoute = require('./auth.route');


chai.config.includeStack = true;

describe('## Auth APIs', () => {
  // # TODO: Implement Authentication Tests.
  it('logs the user in', () => {
    const user = 'username';
    const password = 'password';
    const res = authRoute.getAuth(user, password);

    expect(res).to.be.an('object');
  });
});
