const chai = require('chai');
const Article = require('../article');
const server = require('../../index');

const should = chai.should();
const expect = chai.expect;

const agent = chai.request.agent(server);

chai.config.includeStack = true;

describe('## Article Model', () => {
  it('creates a new article', () => {
    const title = 'title';
    const link = 'link';
    const shortDesc = 'shortdesc';
    const img = 'img.com/ok';

    const article = new Article(title, link, shortDesc, img);

    // Information is passed in correctly
    expect(article.title).to.equal('title');
    expect(article.link).to.equal('link');
    expect(article.shortDesc).to.equal('shortdesc');
    expect(article.img).to.equal('img.com/ok');
    
    // 
  });


});