const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
  username: [{ type: Schema.Types.ObjectId, ref: 'User' }],

  title: { type: String, required: false },
  introduction: { type: String, required: false },
  longDesc: { type: String, required: false },
  languages: { type: Array, required: false },
  skills: { type: Array, required: false },
  interests: { type: Array, required: false },

  resume: { type: String, required: false },
  links: { type: Object, required: false },

  articles: [{ type: Schema.Types.ObjectId, ref: 'Article' }],
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
