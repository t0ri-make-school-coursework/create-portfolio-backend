const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  // after users
  // portfolio: [{ type: Schema.Types.ObjectId, ref: 'Portfolio' }],

  title: { type: String, required: true },
  madeFor: { type: String, required: true },
  shortDesc: { type: String, required: true },
  longDesc: { type: String, required: true },
  repo: { type: String, required: true },
  live: { type: String, required: true },
  img: { type: String, required: true }
});

module.exports = mongoose.model('Project', ProjectSchema);
